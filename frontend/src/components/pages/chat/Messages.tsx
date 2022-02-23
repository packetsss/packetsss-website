import moment from "moment";
import React, { Component } from "react";

import { Message, MessageDate, MessageEnd } from "./Message";

function groupedDays(messages: any) {
    return messages.reduce((acc: any, el: any) => {
        const messageDay = moment(el.created_at).format("YYYY-MM-DD");
        if (acc[messageDay]) {
            return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
        }
        return { ...acc, [messageDay]: [el] };
    }, {});
}

function generateItems(messages: any) {
    const days = groupedDays(messages);
    const sortedDays = Object.keys(days).sort(
        (x, y) =>
            moment(y, "YYYY-MM-DD").unix() - moment(x, "YYYY-MM-DD").unix()
    );
    const items = sortedDays.reduce((acc: any, date) => {
        const sortedMessages = days[date].sort((x: any, y: any) => {
            return +new Date(y.created_at) - +new Date(x.created_at);
        });
        return acc.concat([
            ...sortedMessages,
            { type: "date", date, id: date },
        ]);
    }, []);
    return items;
}

export default class Messages extends Component<any> {
    render() {
        const messageList = generateItems(this.props.messages).map(
            (message: any, index: any) =>
                message.type === "date" ? (
                    <MessageDate key={index} message={message}></MessageDate>
                ) : (
                    <Message
                        key={index}
                        message={message}
                        user={
                            message.sender === this.props.friend.username
                                ? this.props.friend
                                : this.props.user
                        }
                        ownMessage={message.sender === this.props.user.username}
                    ></Message>
                )
        );
        if (this.props.endOfChat) {
            console.log(messageList);
            messageList.push(
                <MessageEnd
                    key={messageList.length}
                    user={this.props.friend}
                ></MessageEnd>
            );
        }
        return (
            <div className="messages">
                <div className="messages-list" id="messages-list-scrolling">
                    {messageList}
                </div>
            </div>
        );
    }
}
