import React from "react";
import Popup from "reactjs-popup";
import axiosAccess from "../../../auth/Access";
import SearchBar from "../../utils/SearchBar";
import { AllUsers } from "./AllUsers";
import { Friend } from "./Friend";

export class FriendsList extends React.Component<any> {
    state = {
        userList: [],
        filteredUserList: [],
        friendRequestList: [],
        requestSentList: [],
        popupOpened: false,
        emptySearch: true,
    };

    handleClick = (id: any) => {
        this.props.onSelectFriend(id);
    };

    handleManage = (props: any) => {
        this.props.onManageFriend();
    };

    addFriend = (username: string) => {
        axiosAccess
            .post(`/friends/add_friend/`, {
                to_user: username,
                message: "Friend Request",
            })
            .then((resp: any) => {
                console.log(resp);
            })
            .catch((err: any) => {
                console.log(err.response);
            });
    };

    acceptFriendRequest = (username: string) => {
        axiosAccess
            .post(`/friends/accept_request/`, {
                id: username,
            })
            .then((resp: any) => {
                console.log(resp);
            })
            .catch((err: any) => {
                console.log(err.response);
            });
    };

    blockUser = () => {
        console.log("Block user");
    };

    onFilteredUsers = (filteredUsers: any[], emptySearch: boolean) => {
        this.setState({
            filteredUserList: filteredUsers,
            emptySearch: emptySearch,
        });
    };

    componentDidMount() {
        // list all user
        axiosAccess
            .get(`/user/`, {
                params: {
                    listAll: true,
                },
            })
            .then((resp: any) => {
                this.setState({ userList: resp.data });
            })
            .catch((err: any) => {
                console.log(err.response);
            });

        // get all friend request
        axiosAccess
            .get(`/friends/requests/`)
            .then((resp: any) => {
                this.setState({ friendRequestList: resp.data });
            })
            .catch((err: any) => {
                console.log(err.response);
            });

        // get all friend request
        axiosAccess
            .get(`/friends/sent_requests/`)
            .then((resp: any) => {
                this.setState({ requestSentList: resp.data });
            })
            .catch((err: any) => {
                console.log(err.response);
            });
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.popupOpened !== this.state.popupOpened) {
            this.props.onManageFriend();
        }
    }
    render() {
        let friendsList = (
            <div className="no-content-message">
                There is no friends to show
            </div>
        );
        let listUsers = null;
        // get friends
        if (this.props.friends && this.props.friends.map) {
            friendsList = this.props.friends.map((c: any) => {
                return (
                    <Friend
                        id={c.id}
                        key={c.id}
                        name={c.username}
                        avatar={c.avatar}
                        onClick={this.handleClick}
                    />
                );
            });
        }
        // get all users
        let listToUse = this.state.userList;
        if (this.state.filteredUserList.length > 0 || !this.state.emptySearch) {
            listToUse = this.state.filteredUserList;
        }
        listUsers = listToUse.map((c: any) => {
            return c.username !== this.props.currentUser.username ? (
                <AllUsers
                    key={c.id}
                    user={c}
                    addFriend={this.addFriend}
                    blockUser={this.blockUser}
                    friendsList={this.props.friends}
                    acceptFriendRequest={this.acceptFriendRequest}
                    requestSentList={this.state.requestSentList}
                    friendRequestList={this.state.friendRequestList}
                />
            ) : (
                <div key={c.id}></div>
            );
        });

        return (
            <div className="friend-list">
                {friendsList}

                <img
                    alt="add icon"
                    className="addIcon"
                    src="https://api.iconify.design/akar-icons/circle-plus.svg"
                    onClick={() => this.setState({ popupOpened: true })}
                ></img>

                <Popup
                    open={this.state.popupOpened}
                    onClose={() => this.setState({ popupOpened: false })}
                    closeOnDocumentClick
                >
                    <div className="popup">
                        <label>All Users</label>

                        <img
                            alt="close icon"
                            className="popup-close"
                            src="https://api.iconify.design/eva/close-circle-outline.svg"
                            width="30"
                            height="30"
                            onClick={() =>
                                this.setState({ popupOpened: false })
                            }
                        />

                        <SearchBar
                            placeholder="Search..."
                            data={this.state.userList}
                            onFilteredUsers={this.onFilteredUsers}
                        ></SearchBar>

                        {listUsers}
                    </div>
                </Popup>
            </div>
        );
    }
}
