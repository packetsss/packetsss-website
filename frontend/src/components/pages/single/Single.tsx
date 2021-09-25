import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { store } from "react-notifications-component";

import "./single.css";
import { Particle, getDate, timeDelay, backendHostAddr } from "../../../Utils";
import angelImg from "../../../Assets/landscape_2.png";

async function updatePost(postID: number, body: any, token: string) {
    const resp = await fetch(`${backendHostAddr}/api/posts/${postID}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify(body),
    });
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
    return await resp.json();
}

function deletePost(postID: number, token: string) {
    return fetch(`${backendHostAddr}/api/posts/${postID}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });
}

function onEditing(isEditing: boolean, func: any, value: string) {
    if (isEditing) {
        return (
            <textarea
                className="form-control z-depth-1"
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
    contents.title = titleChange ? titleChange.target.value : contents.title;
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
                    deletePost(props.match.params.id, token);
                    window.location.replace("/posts");
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
    const address: string =
        `${backendHostAddr}/api/posts/` + props.match.params.id;

    useEffect(() => {
        if (!document.cookie) {
            window.location.replace("/login");
        }
    }, []);

    // order of useEffect is important
    useEffect(() => {
        fetch(`${backendHostAddr}/api/users/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: cookies,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                return setUser(resp[0]);
            })
            .catch((error) => console.log(error));
    }, [cookies]);

    useEffect(() => {
        fetch(address, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: cookies,
            },
        })
            .then((resp) => resp.json())
            .then((resp) => {
                return setContents(resp);
            })
            .catch((error) => console.log(error));
    }, [address, cookies]); // memorize address to avoid warning

    // content editing
    const [isEditing, setIsEditing] = useState<any>(false);
    const [titleChange, setTitleChange] = useState<any>();
    const [contentChange, setContentChange] = useState<any>();

    const [user, setUser] = useState<any>();

    // content reading
    const [contents, setContents] = useState<any>();

    // check both contents and user is loaded
    return (contents && user) ? (
        <Container fluid className="single" key={contents.id}>
            <Particle />
            <Container className="singlePostWrapper">
                <Row>
                    <img className="singlePostImg" src={angelImg} alt="Angel" />
                </Row>
                <Row className="singlePostTitle">
                    <Col></Col>
                    <Col>
                        {onEditing(isEditing, setTitleChange, contents.title)}
                    </Col>
                    {/* check ownership */}
                    {user && (user.id === contents.owner_id) ? (
                        <Col className="singlePostEdit">
                            {!isEditing ? (
                                <i
                                    className="singlePostIcon far fa-edit"
                                    onClick={() => setIsEditing(!isEditing)}
                                ></i>
                            ) : (
                                <i
                                    className="singlePostIcon far fa-check-square"
                                    onClick={() => {
                                        setIsEditing(!isEditing);
                                        contents.owner_name = user.username;

                                        [contents.title, contents.description] =
                                            onBtnClick(
                                                props.match.params.id,
                                                titleChange,
                                                contentChange,
                                                contents,
                                                cookies
                                            );
                                    }}
                                ></i>
                            )}

                            <i
                                className="singlePostIcon far fa-trash-alt"
                                onClick={() => confirmDelete(props, cookies)}
                            ></i>
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
                <Col className="singlePostDesc">
                    {/* tab */}
                    &emsp;
                    {onEditing(
                        isEditing,
                        setContentChange,
                        contents.description
                    )}
                </Col>
            </Container>
        </Container>
    ) : (
        <Container></Container>
    );
}
