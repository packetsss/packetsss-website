"""
Consumers are the counterpart to Django views. Any user connecting to our app will be added to the “users” group and will receive messages sent by the server. When the client disconnects from our app, the channel is removed from the group, and the user will stop receiving messages.

Consumers do a couple of things in particular:
- Structures your code as a series of functions to be called whenever an event happens, rather than making you write an event loop.
- Allow you to write synchronous or async code and deals with handoffs and threading for you.
"""

import json
from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from user.models import CustomUser
from .models import ChatModel, MessageModel


class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.command_dict = {"fetch_message": self.fetch_messages}

        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_%s" % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name, self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name, self.channel_name
        )

    # Receive message from WebSocket
    def receive(self, text_data):
        text_data_json = json.loads(text_data)

        # execute command
        if text_data_json["type"] == "command":
            self.command_dict[text_data_json["message"]](text_data_json)

        # send message
        else:
            self.on_receive_message(text_data_json)

    def on_receive_message(self, data):
        message = data["message"]
        sender = data["sender"]
        receiver = data["receiver"]

        # create new chat model
        if not ChatModel.objects.filter(room=self.room_name).exists():
            self.create_chat_model(sender, receiver)

        # create message model
        message_model = MessageModel(
            message=message,
            sender=CustomUser.objects.get(username=sender),
            receiver=CustomUser.objects.get(username=receiver),
        )
        message_model.save()

        # add message to chat model
        chat_model = ChatModel.objects.get(room=self.room_name)
        chat_model.messages.add(message_model)
        chat_model.save()

        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                "type": "chat_message_",
                "id": message_model.id,
                "message": message,
                "sender": sender,
                "receiver": receiver,
                "created_at": str(message_model.created_at),
            },
        )

    # Receive message from room group
    def chat_message_(self, event):
        id = event["id"]
        message = event["message"]
        sender = event["sender"]
        receiver = event["receiver"]
        created_at = event["created_at"]

        # Send message to WebSocket
        self.send(
            text_data=json.dumps(
                {
                    "id": id,
                    "message": message,
                    "sender": sender,
                    "receiver": receiver,
                    "created_at": created_at,
                }
            )
        )

    def create_chat_model(self, sender, receiver):
        chat_model = ChatModel(
            room=self.room_name,
        )
        chat_model.save()

    def fetch_messages(self, data):
        sender = data["sender"]
        receiver = data["receiver"]
        message_query = data["message_query"]

        # create new chat model
        if not ChatModel.objects.filter(room=self.room_name).exists():
            self.create_chat_model(sender, receiver)
        chat_model = ChatModel.objects.get(room=self.room_name)

        messages = chat_model.messages.order_by("-created_at").all()[
            message_query : message_query + 10
        ]
        content = {
            "command": "fetch_message",
            "content": [
                {
                    "id": x.id,
                    "message": x.message,
                    "sender": x.sender.username,
                    "receiver": x.receiver.username,
                    "created_at": str(x.created_at),
                }
                for x in messages
            ],
            "end": len(messages) < 10,
        }
        self.send(text_data=json.dumps(content))
