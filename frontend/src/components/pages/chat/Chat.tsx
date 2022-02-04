import React from "react";
import socketClient from "socket.io-client";

import "./chat.css";
import { baseURL } from "../../../Utils";
import { ChannelList } from "./ChannelList";
import { MessagesPanel } from "./MessagesPanel";

export class Chat extends React.Component {
    state = {
        channels: null,
        socket: null,
        channel: null,
    };
    socket: any;
    componentDidMount() {
        this.loadChannels();
        this.configureSocket();
    }

    configureSocket = () => {
        var socket = socketClient(baseURL);
        socket.on("connection", () => {
            if (this.state.channel) {
                this.handleChannelSelect(this.state.channel["id"]);
            }
        });
        socket.on("channel", (channel) => {
            let channels: any = this.state.channels;
            channels.forEach((c: any) => {
                if (c.id === channel.id) {
                    c.participants = channel.participants;
                }
            });
            this.setState({ channels });
        });
        socket.on("message", (message) => {
            let channels: any = this.state.channels;
            channels.forEach((c: any) => {
                if (c.id === message.channel_id) {
                    if (!c.messages) {
                        c.messages = [message];
                    } else {
                        c.messages.push(message);
                    }
                }
            });
            this.setState({ channels });
        });
        this.socket = socket;
    };

    loadChannels = async () => {
        fetch(baseURL + "/getChannels/").then(async (response) => {
            let data = await response.json();
            this.setState({ channels: data.channels });
        });
    };

    handleChannelSelect = (id: any) => {
        let chs: any = this.state.channels
        let channel = chs.find((c: any) => {
            return c.id === id;
        });
        this.setState({ channel });
        this.socket.emit("channel-join", id, (ack: any) => {});
    };

    handleSendMessage = (channel_id: any, text: any) => {
        this.socket.emit("send-message", {
            channel_id,
            text,
            senderName: this.socket.id,
            id: Date.now(),
        });
    };

    render() {
        return (
            <div className="chat-app">
                <ChannelList
                    channels={this.state.channels}
                    onSelectChannel={this.handleChannelSelect}
                />
                <MessagesPanel
                    onSendMessage={this.handleSendMessage}
                    channel={this.state.channel}
                />
            </div>
        );
    }
}
