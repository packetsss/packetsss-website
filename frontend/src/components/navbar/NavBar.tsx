import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { CgFileDocument } from "react-icons/cg";
import {
    Row,
    Col,
    Container,
    Button,
    Nav,
    Navbar,
    Dropdown,
} from "react-bootstrap/";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import "./navbar.css";

import axiosAccess from "../../auth/Access";
import { logout } from "../pages/setting/Setting";
import { defaultAvatar } from "../utils/Utils";

function loginDetect(user: any) {
    if (!localStorage.getItem("refresh_token")) {
        return (
            <Button href="#/login" className="fork-btn-inner">
                <Row>
                    <Col>Login Here</Col>
                </Row>
            </Button>
        );
    }

    const CustomToggle = React.forwardRef<any, any>(
        ({ onClick, value }, ref) => (
            <a
                href="google.com"
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {user ? (
                    <div className="settings-icon">
                        <img
                            className="settings-icon-avatar"
                            src={
                                user.avatar
                                    ? user.avatar
                                    : "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                            }
                            alt="avatar"
                        ></img>
                        {/* <h2>&nbsp;&nbsp;{user.username}</h2> */}
                    </div>
                ) : (
                    <div></div>
                )}
            </a>
            // </Link>
        )
    );
    const profileBrief: any = React.forwardRef<any, any>(
        ({ onClick, value }, ref) =>
            user ? (
                <Container className="dropdownIcon">
                    <img
                        className="dropdownIconAvatar"
                        src={user.avatar ? user.avatar : defaultAvatar}
                        alt="avatar"
                    ></img>
                    <br />
                    <label className="dropdownUser">{user.username}</label>
                </Container>
            ) : (
                <div></div>
            )
    );

    return (
        <div className="loginDetectDiv">
            <Dropdown className="profileDropdown">
                <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                <Dropdown.Menu className="profileDropdownMenu">
                    <Dropdown.Item as={profileBrief}></Dropdown.Item>
                    <Dropdown.Item href="#/chat">Messages</Dropdown.Item>
                    <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                        className="profileDropdownMenuLogout"
                        onClick={logout}
                    >
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default function TopBar() {
    const cookies = `Token ${document.cookie.split("=")[1]}`;

    useEffect(() => {
        localStorage.getItem("refresh_token") ? (
            axiosAccess
                .get(`/user/`)
                .then((resp: any) => {
                    setUser(resp.data[0]);
                })
                .catch((err: any) => {
                    console.log(err.response);
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
                    <div className="top-clickable">
                        <a
                            aria-label="link"
                            href="https://github.com/packetsss"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="topIcon fab fa-github-square"></i>
                        </a>
                        <a
                            aria-label="link"
                            href="https://www.linkedin.com/in/paul-pan001/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="topIcon fab fa-linkedin"></i>
                        </a>
                        <a
                            aria-label="link"
                            href="https://www.facebook.com/paul.pan.94849/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="topIcon fab fa-facebook-square"></i>
                        </a>
                        <a
                            aria-label="link"
                            href="https://twitter.com/pyj2001"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="topIcon fab fa-twitter-square"></i>
                        </a>
                        <a
                            aria-label="link"
                            href="https://www.instagram.com/_popaz/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="topIcon fab fa-instagram-square"></i>
                        </a>
                    </div>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav defaultActiveKey="#home" className="navbar-items">
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
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Item className="fork-btn">
                        <div>{loginDetect(user)}</div>
                    </Nav.Item>
                </Container>
            </Navbar>
        </div>
    );
}
