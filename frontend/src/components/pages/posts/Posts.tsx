import "./posts.css";
import { Particle, eraseCookies, getDate, randomRange } from "../../../Utils";

import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import axiosInstance from "../../../auth/Login";
import { Link } from "react-router-dom";

// single post
function Post(props: any) {
    const randomNumber = randomRange(200, 800);
    return props.post ? (
        <div className="post">
            <Link
                to={`/post/${props.post.id}`}
                style={{ textDecoration: "none", color: "black" }}
            >
                <img
                    className="postImg"
                    src={`https://picsum.photos/${randomNumber}`}
                    alt=""
                ></img>
                <div className="postInfo">
                    <div className="postCategories"></div>
                    <span className="postTitle">{props.post.title}</span>
                    <span className="postDate">{getDate(props.post.date)}</span>
                </div>
            </Link>
            <p className="postDesc">{props.post.description}</p>
        </div>
    ) : null;
}

function getPosts(posts: any) {
    try {
        return posts.map((post: any) => {
            return (
                <Col key={post.id}>
                    <Post post={post} />
                </Col>
            );
        });
    } catch {
        return eraseCookies();
    }
}

export default function Posts() {
    const [posts, setPosts] = useState<any>([]);
    const cookies = `Token ${document.cookie.split("=")[1]}`;

    useEffect(() => {
        if (!document.cookie) {
            window.location.replace("#/login");
            window.location.reload();
        }
        axiosInstance
            .get(`/api/posts/`)
            .then((resp: any) => {
                setPosts(resp.data);
            })
            .catch((error: any) => console.log(error));
    }, [cookies]);

    return posts ? (
        <Container className="posts">
            <Particle />
            {getPosts(posts)}
        </Container>
    ) : (
        <Container></Container>
    );
}
