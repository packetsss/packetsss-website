import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { store } from "react-notifications-component";

import "./single.css";
import { Particle, getDate, timeDelay, disableRefresh } from "../../../Utils";
import axiosInstance from "../../../auth/Login";

async function updatePost(postID: number, body: any, token: string) {
    axiosInstance.put(`/api/posts/${postID}/`, body).then((resp: any) => {
        store.addNotification({
            title: "Edit Success!",
            message: "You've successfully updated your post",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__bounceIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: timeDelay,
                onScreen: true,
            },
        });
    });
}

function onEditing(isEditing: boolean, func: any, value: string) {
    if (isEditing) {
        return (
            <textarea
                required
                className="form-control z-depth-1"
                style={{ whiteSpace: "pre-wrap" }}
                onChange={func}
                defaultValue={value}
                rows={value.length / 50}
                placeholder="Please enter something at least..."
            />
        );
    } else {
        return value;
    }
}

function onBtnClick(
    postID: number,
    titleChange: any,
    contentChange: any,
    contents: any,
    token: string
) {
    // update title and body
    if (titleChange || contentChange) {
        contents.title = titleChange
            ? titleChange.target.value
            : contents.title;
        contents.description = contentChange
            ? contentChange.target.value
            : contents.description;

        updatePost(
            postID,
            {
                title: contents.title,
                description: contents.description,
                owner_id: contents.owner_id,
            },
            token
        );
    } else {
        <div></div>;
    }
    return [contents.title, contents.description];
}

function confirmDelete(props: any, token: string) {
    confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this post?",
        buttons: [
            {
                label: "Yes",
                onClick: () => {
                    // delete post
                    axiosInstance
                        .delete(`/api/posts/${props.match.params.id}/`)
                        .then((resp: any) => {
                            window.location.replace("#/posts");
                            window.location.reload();
                        });
                },
            },
            {
                label: "No",
                onClick: () => null,
            },
        ],
    });
}

export default function Single(props: any) {
    // cookies reading
    const cookies = `Token ${document.cookie.split("=")[1]}`;

    useEffect(() => {
        if (!document.cookie) {
            window.location.replace("#/login");
        }
    }, []);

    // order of useEffect is important
    useEffect(() => {
        axiosInstance
            .get(`/api/users/`)
            .then((resp: any) => {
                setUser(resp.data[0]);
            })
            .catch((error) => console.log(error));
    }, [cookies]);

    useEffect(() => {
        axiosInstance
            .get(`/api/posts/${props.match.params.id}`)
            .then((resp: any) => {
                setContents(resp.data);
            })
            .catch((error) => console.log(error));
    }, [cookies, props.match.params.id]);

    // content editing
    const [isEditing, setIsEditing] = useState(false);
    const [titleChange, setTitleChange] = useState<any>();
    const [contentChange, setContentChange] = useState<any>();

    const [user, setUser] = useState<any>();

    // content reading
    const [contents, setContents] = useState<any>();

    // check both contents and user is loaded
    return contents && user ? (
        <Container fluid className="single">
            <Particle />
            <Container className="singlePostWrapper">
                <Row>
                    <img
                        className="singlePostImg"
                        src={`https://picsum.photos/1400/400`}
                        alt="post cover"
                    />
                </Row>
                <form
                    onSubmit={(env) => {
                        disableRefresh(env);
                        setIsEditing(!isEditing);
                        contents.owner_name = user.username;

                        [contents.title, contents.description] = onBtnClick(
                            props.match.params.id,
                            titleChange,
                            contentChange,
                            contents,
                            cookies
                        );
                    }}
                >
                    <Row className="singlePostTitle">
                        <Col></Col>
                        <Col className="col-md-8">
                            {onEditing(
                                isEditing,
                                setTitleChange,
                                contents.title
                            )}
                        </Col>
                        {/* check ownership */}
                        {user && user.id === contents.owner_id ? (
                            <Col className="singlePostEdit">
                                {!isEditing ? (
                                    <div>
                                        <i
                                            className="singlePostIcon far fa-edit"
                                            onClick={() =>
                                                setIsEditing(!isEditing)
                                            }
                                        ></i>
                                        <i
                                            className="singlePostIcon far fa-trash-alt"
                                            onClick={() =>
                                                confirmDelete(props, cookies)
                                            }
                                        ></i>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            type="submit"
                                            className="singlePostIcon far fa-check-square"
                                        ></button>
                                        <i
                                            className="singlePostIcon far fa-window-close"
                                            onClick={() =>
                                                setIsEditing(!isEditing)
                                            }
                                        ></i>
                                    </div>
                                )}
                            </Col>
                        ) : (
                            <Col></Col>
                        )}
                    </Row>
                    <Col className="singlePostInfo">
                        <Row className="singlePostAuthor">
                            Author:&nbsp;<b>{user.username}</b>
                        </Row>
                        <Row className="singlePostDate">
                            {getDate(contents.date)}
                        </Row>
                    </Col>
                    <Col>
                        <p className="singlePostDesc">
                            {/* tab */}
                            &emsp;
                            {onEditing(
                                isEditing,
                                setContentChange,
                                contents.description
                            )}
                        </p>
                    </Col>
                </form>
            </Container>
        </Container>
    ) : (
        <Container></Container>
    );
}
