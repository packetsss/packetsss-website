from django.conf import settings
from rest_framework import serializers

from user.serializers import CustomUserSerializer
from .models import FileUploadModel, MessageFileModel, MessageModel


class FileUploadModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUploadModel
        fields = "__all__"


class MessageAttachmentSerializer(serializers.ModelSerializer):
    attachment = FileUploadModelSerializer()

    class Meta:
        model = MessageFileModel
        fields = "__all__"


class MessageSerializer(serializers.ModelSerializer):
    sender = serializers.SerializerMethodField("get_sender_data")
    sender_id = serializers.IntegerField(write_only=True)
    receiver = serializers.SerializerMethodField("get_receiver_data")
    receiver_id = serializers.IntegerField(write_only=True)
    message_attachments = MessageAttachmentSerializer(read_only=True, many=True)

    class Meta:
        model = MessageModel
        fields = "__all__"

    def get_sender_data(self, request):
        print(request.sender)
        return CustomUserSerializer(request.sender.user).data

    def get_receiver_data(self, request):
        print(request.receiver)
        return CustomUserSerializer(request.receiver.user).data
