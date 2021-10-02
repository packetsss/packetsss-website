import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { store } from "react-notifications-component";
import axiosInstance from "../../../auth/Login";
import {
    Particle,
    disableRefresh,
    timeDelay,
} from "../../../Utils";
import "./write.css";

export default function Write() {
    const [user, setUser] = useState<any>();
    const [titleChange, setTitleChange] = useState<any>();
    const [contentChange, setContentChange] = useState<any>();
    const [publishSuccess, setPublishSuccess] = useState(-1);
    const cookies = `Token ${document.cookie.split("=")[1]}`;

    useEffect(() => {
        if (!document.cookie) {
            window.location.replace("#/login");
            window.location.reload();
        }
        if (publishSuccess !== -1) {
            setTimeout(() => {
                window.location.replace(`#/post/${publishSuccess}`);
            }, timeDelay);
        }

        axiosInstance
            .get(`/api/users/`)
            .then((resp: any) => {
                setUser(resp.data[0]);
            })
            .catch((error) => console.log(error));
    }, [publishSuccess, cookies]);

    function createPost(postBody: any, token: string) {
        axiosInstance
            .post(`/api/posts/`, postBody)
            .then((resp: any) => {
                store.addNotification({
                    title: "Publish Success!",
                    message: "Congratulations on completing this post",
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
                setPublishSuccess(resp.data.id)
            })
            .catch((err: any) => {
                store.addNotification({
                    title: "Publish Success!",
                    message: "Congratulations on completing this post",
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

    return user ? (
        <Container className="write">
            <Particle />
            <img
                className="writeImg"
                src={`https://picsum.photos/1200/400`}
                alt=""
            />

            <form
                className="writeForm"
                onSubmit={(env) => {
                    disableRefresh(env);
                    createPost(
                        {
                            title: titleChange.target.value,
                            description: contentChange.target.value,
                            owner_id: user.id,
                            owner_name: user.username,
                        },
                        cookies
                    );
                }}
            >
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                    />
                    <input
                        required
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        onChange={setTitleChange}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        required
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        autoFocus={true}
                        onChange={setContentChange}
                    />
                </div>
                <button
                    className="writeSubmit"
                    type="submit"
                    //   onClick={}
                >
                    Publish
                </button>
            </form>
        </Container>
    ) : (
        <div></div>
    );
}
