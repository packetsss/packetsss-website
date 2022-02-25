import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { store } from "react-notifications-component";

import "./single.css";
import {
    getDate,
    Particle,
    timeDelay,
    disableRefresh,
    autoResizeTextarea,
} from "../../utils/Utils";
import axiosAccess from "../../../auth/Access";

async function updatePost(postID: number, body: any) {
    console.log(body);
    axiosAccess.put(`/api/posts/${postID}/`, body).then((resp: any) => {
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

function onEditing(
    isEditing: boolean,
    func: any,
    value: string,
    maxLen: number,
    rowConst: number
) {
    if (isEditing) {
        return (
            <textarea
                required
                id={`${maxLen}`}
                className="singleEdit form-control z-depth-1"
                onChange={(e) => {
                    func(e);
                    autoResizeTextarea(e);
                }}
                defaultValue={value}
                rows={value.length / rowConst}
                maxLength={maxLen}
                placeholder="Please enter something at least..."
                // onKeyDown={handleKeyDown}
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
    contents: any
) {
    // update title and body
    if (titleChange || contentChange) {
        contents.title = titleChange
            ? titleChange.target.value
            : contents.title;
        contents.content = contentChange
            ? contentChange.target.value
            : contents.content;

        updatePost(postID, contents);
    } else {
        <div></div>;
    }
    return [contents.title, contents.content];
}

function confirmDelete(props: any) {
    confirmAlert({
        title: "Confirm to delete",
        message: "Are you sure to delete this post?",
        buttons: [
            {
                label: "Yes",
                onClick: () => {
                    // delete post
                    axiosAccess
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
    // order of useEffect is important
    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            window.location.replace("#/login");
        }
        axiosAccess
            .get(`/user/`)
            .then((resp: any) => {
                setUser(resp.data[0]);
            })
            .catch((error) => console.log(error));
        axiosAccess
            .get(`/api/posts/${props.match.params.id}`)
            .then((resp: any) => {
                setContents(resp.data);
            })
            .catch((error) => console.log(error));
    }, [props.match.params.id]);

    // content editing
    const [isEditing, setIsEditing] = useState(false);
    const [titleChange, setTitleChange] = useState<any>();
    const [contentChange, setContentChange] = useState<any>();

    const [user, setUser] = useState<any>();

    // content reading
    const [contents, setContents] = useState<any>();

    // check both contents and user are loaded
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

                        [contents.title, contents.content] = onBtnClick(
                            props.match.params.id,
                            titleChange,
                            contentChange,
                            contents
                        );
                    }}
                >
                    <Row className="singlePostTitle">
                        <Col className="singlePostSpacer"></Col>
                        <Col className="col-md-8 singlePostTitleText">
                            {onEditing(
                                isEditing,
                                setTitleChange,
                                contents.title,
                                100, // max length
                                30 //row length
                            )}
                        </Col>
                        {/* check ownership */}
                        {user.id === contents.author ? (
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
                                            onClick={() => confirmDelete(props)}
                                        ></i>
                                    </div>
                                ) : (
                                    <div>
                                        <button
                                            aria-label="btn"
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
                            <Col className="singlePostSpacer"></Col>
                        )}
                    </Row>
                    <Col className="singlePostInfo">
                        <Row className="singlePostAuthor">
                            Author:&nbsp;<b>{contents.author_name}</b>
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
                                contents.content,
                                777, // max length
                                80 //row length
                            )}
                        </p>
                    </Col>
                </form>
            </Container>
        </Container>
    ) : (
        <div></div>
    );
}
