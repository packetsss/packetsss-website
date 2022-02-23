import moment from "moment";
import React from "react";
import { defaultAvatar } from "../../utils/Utils";

const messageTime = (_time: string) => {
    let time: any = new Date(_time);
    time = moment(time).format("LT");
    return time;
};

export class Message extends React.Component<any> {
    render() {
        return this.props.ownMessage ? (
            <li key={this.props.index}>
                <div className="messagesBlockReversed">
                    <div className="messageProfileReversed">
                        <div className="avatar-div">
                            <img
                                src={
                                    this.props.user.avatar
                                        ? this.props.user.avatar
                                        : defaultAvatar
                                }
                                alt="avatar"
                            />
                        </div>
                        <h4>{this.props.message.sender}</h4>
                    </div>
                    <div className="messageBodyReversed">
                        <p>{this.props.message.message}</p>
                    </div>
                </div>
                <span className="createdTimeReversed">
                    {messageTime(this.props.message.created_at)}
                </span>
            </li>
        ) : (
            <li key={this.props.index}>
                <div className="messagesBlock">
                    <div className="messageProfile">
                        <div className="avatar-div">
                            <img
                                src={
                                    this.props.user.avatar
                                        ? this.props.user.avatar
                                        : defaultAvatar
                                }
                                alt="avatar"
                            />
                        </div>
                        <h4>{this.props.message.sender}</h4>
                    </div>
                    <div className="messageBody">
                        <p>{this.props.message.message}</p>
                    </div>
                </div>
                <span className="createdTime">
                    {messageTime(this.props.message.created_at)}
                </span>
            </li>
        );
    }
}

export class MessageDate extends React.Component<any> {
    render() {
        return (
            <div className="createdDate">
                <div className="createdDateChild">
                    {this.props.message.date}
                </div>
            </div>
        );
    }
}

export class MessageEnd extends React.Component<any> {
    render() {
        console.log(this.props.user);
        return (
            <div className="endChat">
                <div className="endChatProfile">
                        <div className="avatar-div endChatAvatar">
                            <img
                                src={
                                    this.props.user.avatar
                                        ? this.props.user.avatar
                                        : defaultAvatar
                                }
                                alt="avatar"
                            />
                        </div>
                        <h4>{this.props.user.username}</h4>
                    </div>
                <div className="endChatChild">Friend since {moment(this.props.user.created).format("YYYY-MM-DD")}</div>
            </div>
        );
    }
}
