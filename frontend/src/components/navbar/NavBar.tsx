import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";
import { Row, Col, Container, Button, Nav, Navbar } from "react-bootstrap/";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import "./navbar.css";
import axiosInstance from "../../auth/Login";

function loginDetect(user: any) {
    if (!document.cookie) {
        return (
            <Button href="#/login/" className="fork-btn-inner">
                <Row>
                    <Col>Login Here</Col>
                </Row>
            </Button>
        );
    } else {
        return (
            <div style={{ paddingLeft: "50px" }}>
                Hi,&nbsp;&nbsp;
                <a
                    style={{
                        textDecoration: "none",
                        fontSize: 25,
                        color: "black",
                    }}
                    href="#/settings/"
                >
                    {user ? user.username : null}
                </a>
            </div>
        );
    }
}

export default function TopBar() {
    const cookies = `Token ${document.cookie.split("=")[1]}`;

    useEffect(() => {
        document.cookie ? (
            axiosInstance.get(`/api/users/`).then((resp: any) => {
                setUser(resp.data[0]);
            })
        ) : (
            <div></div>
        );
    }, [cookies]);

    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
    const [user, setUser] = useState<any>();

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);
    return (
        <div className="top">
            <Navbar
                expanded={expand}
                fixed="top"
                expand="md"
                className={navColour ? "sticky" : "navbar"}
            >
                <Container>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => {
                            updateExpanded(expand ? false : true);
                        }}
                    ></Navbar.Toggle>
                    <a
                        className="topClickable"
                        href="https://github.com/packetsss"
                    >
                        <i className="topIcon fab fa-github-square"></i>
                    </a>
                    <a
                        className="topClickable"
                        href="https://www.linkedin.com/in/paul-pan001/"
                    >
                        <i className="topIcon fab fa-linkedin"></i>
                    </a>
                    <a
                        className="topClickable"
                        href="https://www.facebook.com/paul.pan.94849/"
                    >
                        <i className="topIcon fab fa-facebook-square"></i>
                    </a>
                    <a
                        className="topClickable"
                        href="https://twitter.com/pyj2001"
                    >
                        <i className="topIcon fab fa-twitter-square"></i>
                    </a>
                    <a
                        className="topClickable"
                        href="https://www.instagram.com/_popaz/"
                    >
                        <i className="topIcon fab fa-instagram-square"></i>
                    </a>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineHome
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    HOME
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/about"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineUser
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    ABOUT
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/projects"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    PROJECTS
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/posts"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <CgFileDocument
                                        style={{ marginBottom: "2px" }}
                                    />{" "}
                                    POSTS
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    as={Link}
                                    to="/write"
                                    onClick={() => updateExpanded(false)}
                                >
                                    <ImBlog style={{ marginBottom: "2px" }} />{" "}
                                    WRITE
                                </Nav.Link>
                            </Nav.Item>

                            <div className="fork-btn">{loginDetect(user)}</div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
