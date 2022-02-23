import React from "react";
import { defaultAvatar } from "../../utils/Utils";

export class Friend extends React.Component<any> {
    click = () => {
        this.props.onClick(this.props.id);
    };

    render() {
        return (
            <div className="friend-item" onClick={this.click}>
                <div className="avatar-div">
                    <img
                        src={
                            this.props.avatar
                                ? this.props.avatar
                                : defaultAvatar
                        }
                        alt="avatar"
                    />
                </div>
                <div className="friend-panel-name">{this.props.name}</div>
            </div>
        );
    }
}
