import React from "react";
import { defaultAvatar } from "../../utils/Utils";

const getButtonType = (
    props: any,
    isFriend: any,
    friendRequest: any,
    requestSent: any
) => {
    if (isFriend) {
        return (
            <div className="userButtons" onClick={() => null}>
                <label className="text">Friends</label>
            </div>
        );
    } else if (friendRequest) {
        return (
            <div
                className="userButtons"
                onClick={() => props.acceptFriendRequest(friendRequest.id)}
            >
                <label className="text">Accept Request</label>
            </div>
        );
    } else if (requestSent) {
        return (
            <div
                className="userButtons addButton"
                onClick={() => props.addFriend(props.user.username)}
            >
                <label className="text">Request Sent</label>
            </div>
        );
    } else {
        return (
            <div
                className="userButtons addButton"
                onClick={() => props.addFriend(props.user.username)}
            >
                <label className="text">Add Friend</label>
            </div>
        );
    }
};

export class AllUsers extends React.Component<any> {
    render() {
        const requestSent =
            this.props.requestSentList.filter((x: any) => {
                return x.to_user === this.props.user.username;
            })[0] !== undefined;

        const friendRequest = this.props.friendRequestList.filter((x: any) => {
            return x.from_user === this.props.user.username;
        })[0];

        const isFriend =
            this.props.friendsList.filter((x: any) => {
                return x.username === this.props.user.username;
            })[0] !== undefined;
        // console.log(isFriend, requestSent);

        return (
            <div className="allUser">
                <div className="avatar-div">
                    <img
                        src={
                            this.props.user.avatar
                                ? this.props.user.avatar
                                : defaultAvatar
                        }
                        alt="avatar"
                    ></img>
                </div>
                <div className="username">{this.props.user.username}</div>
                <span className="my-spacer"></span>
                <div
                    className="userButtons blockButton"
                    onClick={() =>
                        this.props.blockUser(this.props.user.username)
                    }
                >
                    <label className="text">Block</label>
                </div>
                {getButtonType(
                    this.props,
                    isFriend,
                    friendRequest,
                    requestSent
                )}
            </div>
        );
    }
}
