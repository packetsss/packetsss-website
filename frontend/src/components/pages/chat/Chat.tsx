import React from "react";
import { w3cwebsocket as WS } from "websocket";

import "./chat.css";
import { baseURL, isDeployed } from "../../utils/Utils";
import { FriendsList } from "./FriendsList";
import { MessagesPanel } from "./MessagesPanel";
import axiosAccess from "../../../auth/Access";

function encodeRoomName(string: string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}

function decodeRoomName(number: string) {
    var string = "";
    number = number.slice(2);
    var length = number.length;
    for (var i = 0; i < length; ) {
        var code = number.slice(i, (i += 2));
        string += String.fromCharCode(parseInt(code, 16));
    }
    return string;
}

function waitForConnection(client: WS, callback: any) {
    setTimeout(() => {
        if (client.readyState === 1) {
            if (callback !== undefined) {
                callback();
            }
            return;
        } else {
            waitForConnection(client, callback);
        }
    }, 5);
}

// class components
export class Chat extends React.Component {
    // use exclamation  to indicate definite assignment
    client!: WS;

    state = {
        friend: Object(),
        friends: [],
        messages: [],
        room: "",
        user: Object(),
        isLoggedIn: false,
        popupOpened: false,
        messageQuery: 0,
        onMessageQuery: false,
        endOfChat: false,
    };

    onSendMessage = (friend: any, message: string) => {
        this.client.send(
            JSON.stringify({
                type: "message",
                time: Date.now(),
                message: message,
                sender: this.state.user.username,
                receiver: friend.username,
            })
        );
    };

    onFriendSelect = (id: any) => {
        let friend: any = this.state.friends.find((c: any) => {
            return c.id === id;
        });

        // change room name
        let roomName: any = [friend.username, this.state.user.username];
        roomName.sort();
        roomName.splice(1, 0, "+");
        roomName = encodeRoomName(roomName.join(""));

        if (this.state.room !== roomName) {
            // close previous websocket
            if (this.client) {
                this.client.close();
            }

            this.setState({
                room: roomName,
                friend: friend,
                messages: [],
                endOfChat: false,
                onMessageQuery: false,
            });
        }
    };

    onManageFriend = () => {
        this.setState({ popupOpened: !this.state.popupOpened });
    };

    onScrollTop = () => {
        if (
            !this.state.onMessageQuery &&
            !this.state.endOfChat &&
            this.state.room
        ) {
            this.setState(
                { messageQuery: this.state.messageQuery + 10 },
                this.onQueryNewMessageHistory
            );
        }
    };

    onQueryNewMessageHistory = () => {
        this.client.send(
            JSON.stringify({
                type: "command",
                time: Date.now(),
                message: "fetch_message",
                message_query: this.state.messageQuery,
                sender: this.state.user.username,
                receiver: this.state.friend.username,
            })
        );
    };

    // run after render is called once
    componentDidMount() {
        // check if logged
        if (!localStorage.getItem("refresh_token")) {
            window.location.replace("#/login");
            // window.location.reload();
        }

        // get user info
        axiosAccess
            .get(`/user/`)
            .then((resp: any) => {
                this.setState({ user: resp.data[0] });
            })
            .catch((err: any) => {
                console.log(err.response);
            });

        // get all friends
        axiosAccess
            .get(`/friends/`)
            .then((resp: any) => {
                this.setState({ friends: resp.data });
            })
            .catch((err: any) => {
                console.log(err.response);
            });
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.room !== this.state.room) {
            // setup new websocket connection
            if (isDeployed) {
                this.client = new WS(
                    `wss://${baseURL.split("/")[2]}:443/ws/chat/${this.state.room}/`
                );
            } else {
                this.client = new WS(
                    `ws://${baseURL.split("/")[2]}/ws/chat/${this.state.room}/`
                );
            }
            this.client.onmessage = (message: any) => {
                const dataFromServer = JSON.parse(message.data);
                // console.log("got reply! ", dataFromServer);
                if (dataFromServer["command"]) {
                    if (dataFromServer["command"] === "fetch_message") {
                        this.setState((state: any) => ({
                            messages: [
                                ...dataFromServer["content"],
                                ...state.messages,
                            ],
                            onMessageQuery: false,
                        }));
                        if (dataFromServer["end"]) {
                            this.setState({
                                endOfChat: true,
                            });
                        }
                    }
                }

                if (dataFromServer["message"]) {
                    this.setState((state: any) => ({
                        messages: [dataFromServer, ...state.messages],
                    }));
                }
            };

            // fetch messages
            waitForConnection(this.client, () => {
                this.client.send(
                    JSON.stringify({
                        type: "command",
                        time: Date.now(),
                        message: "fetch_message",
                        message_query: this.state.messageQuery,
                        sender: this.state.user.username,
                        receiver: this.state.friend.username,
                    })
                );
            });

            // reset messageQuery
            this.setState({ messageQuery: 0 });
        }

        if (prevState.messageQuery !== this.state.messageQuery) {
            this.setState({ onMessageQuery: true });
        }

        // blur the main window when popupOpened
        if (prevState.popupOpened !== this.state.popupOpened) {
            document!.getElementById("mainDiv")!.style.filter = this.state
                .popupOpened
                ? "blur(5px)"
                : "none";
        }
    }

    render() {
        return (
            <div className="chat-app" id="chat-app-main">
                <FriendsList
                    friends={this.state.friends}
                    currentUser={this.state.user}
                    onSelectFriend={this.onFriendSelect}
                    onManageFriend={this.onManageFriend}
                />
                <MessagesPanel
                    user={this.state.user}
                    friend={this.state.friend}
                    messages={this.state.messages}
                    endOfChat={this.state.endOfChat}
                    onScrollTop={this.onScrollTop}
                    onSendMessage={this.onSendMessage}
                />
            </div>
        );
    }
}
