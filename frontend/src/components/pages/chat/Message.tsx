import React from "react";

export class Message extends React.Component<any> {
    render() {
        return (
            <div className="message-item">
                <div>
                    <b>{this.props.senderName}</b>
                </div>
                <span>{this.props.text}</span>
            </div>
        );
    }
}
