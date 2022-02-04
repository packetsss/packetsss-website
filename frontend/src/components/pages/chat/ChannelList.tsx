import React from "react";
import { Channel } from "./Channel";

export class ChannelList extends React.Component<any> {
    handleClick = (id: any) => {
        this.props.onSelectChannel(id);
    };

    render() {
        let list = (
            <div className="no-content-message">
                There is no channels to show
            </div>
        );
        if (this.props.channels && this.props.channels.map) {
            list = this.props.channels.map((c: any) => {
                <Channel
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    participants={c.participants}
                    onClick={this.handleClick}
                />;
            });
        }
        return <div className="channel-list">{list}</div>;
    }
}
