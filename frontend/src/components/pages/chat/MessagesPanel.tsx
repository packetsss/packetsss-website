import React from "react";
import { autoResizeTextarea } from "../../utils/Utils";
import Messages from "./Messages";

const resetTextarea = () => {
    let textarea: any = document.getElementById("message-input-box");
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
};

export class MessagesPanel extends React.Component<any> {
    state = { input_value: "" };
    
    send = (e: any) => {
        e.preventDefault();
        if (this.state.input_value && this.state.input_value !== "") {
            this.props.onSendMessage(this.props.friend, this.state.input_value);
            this.setState({ input_value: "" }, resetTextarea);
        }
    };

    handleInput = (e: any) => {
        this.setState({ input_value: e.target.value });
    };

    render() {
        let input = document.getElementById("message-input-box");
        let form = document.getElementById("messages-input-form");
        let messagesScrolling = document.getElementById(
            "messages-list-scrolling"
        );

        if (input && form) {
            input.addEventListener("keypress",  (event: any) =>{
                if (event.key === "Enter" && !event.shiftKey) {
                    this.send(event)
                    return false;
                }
            });
        }

        if (messagesScrolling) {
            messagesScrolling.addEventListener("wheel", () => {
                // check if scroll to top
                if (
                    messagesScrolling!.scrollTop <=
                    messagesScrolling!.offsetHeight -
                        messagesScrolling!.scrollHeight +
                        5
                ) {
                    this.props.onScrollTop();
                }
            });
        }

        return (
            <div className="messages-panel">
                {this.props.friend && this.props.messages ? (
                    <Messages
                        user={this.props.user}
                        friend={this.props.friend}
                        messages={this.props.messages}
                        endOfChat={this.props.endOfChat}
                    ></Messages>
                ) : (
                    <div></div>
                )}
                <div className="messages-input-wrapper">
                    {this.props.friend["id"] && (
                        <form
                            className="messages-input"
                            id="messages-input-form"
                            onSubmit={this.send}
                        >
                            {/* <input
                            id="message-input-box"
                            type="text"
                            onChange={this.handleInput}
                            value={this.state.input_value}
                        /> */}
                            <textarea
                                id="message-input-box"
                                className="singleEdit form-control z-depth-1"
                                onInput={(e) => {
                                    this.handleInput(e);
                                    autoResizeTextarea(e);
                                }}
                                value={this.state.input_value}
                                rows={this.state.input_value.length / 30}
                                maxLength={500}
                                placeholder="Your Messages Here..."
                            />
                            {this.state.input_value !== "" && (
                                <button
                                    id="message-input-submit-button"
                                    type="submit"
                                >
                                    Send
                                </button>
                            )}
                        </form>
                    )}
                </div>
            </div>
        );
    }
}
