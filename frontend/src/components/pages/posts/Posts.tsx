import "./posts.css";
import { Particle, removeTokens, getDate, randomRange } from "../../utils/Utils";

import { useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosAccess from "../../../auth/Access";

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
                    <span className="postTitle">
                        {props.post.title.length < 18
                            ? props.post.title
                            : props.post.title.slice(0, 18) + "..."}
                    </span>
                    <span className="postDate">{getDate(props.post.date)}</span>
                </div>
            </Link>
            <p className="postDesc">
                {props.post.content.length < 30
                    ? props.post.content
                    : props.post.content.slice(0, 30)}
            </p>
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
        return removeTokens();
    }
}

export default function Posts() {
    const [posts, setPosts] = useState<any>([]);

    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            window.location.replace("#/login");
            window.location.reload();
        }
        axiosAccess
            .get(`/api/posts/`)
            .then((resp: any) => {
                setPosts(resp.data);
            })
            .catch((error: any) => console.log(error));
    }, []);

    return posts ? (
        <Container className="posts">
            <Particle />
            {getPosts(posts)}
        </Container>
    ) : (
        <Container></Container>
    );
}
