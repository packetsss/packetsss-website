import { Link } from "react-router-dom";
import "./topbar.css"
import myAvatar from "../../Assets/avatar.jpeg";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CgFileDocument } from "react-icons/cg";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";


export default function TopBar() {
    const user: boolean = true;
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);
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
            {/* <div className="topLeft">
                {<a className="topClickable" href="https://github.com/packetsss">
                    <i className="topIcon fab fa-github-square"></i>
                </a>
                <a className="topClickable" href="https://www.linkedin.com/in/paul-pan001/">
                    <i className="topIcon fab fa-linkedin"></i>
                </a>
                <a className="topClickable" href="https://www.facebook.com/paul.pan.94849/">
                    <i className="topIcon fab fa-facebook-square"></i>
                </a>
                <a className="topClickable" href="https://twitter.com/pyj2001">
                    <i className="topIcon fab fa-twitter-square"></i>
                </a>
                <a className="topClickable" href="https://www.instagram.com/_popaz/">
                    <i className="topIcon fab fa-instagram-square"></i>
                </a>}
            </div> */}
            <div className="topCenter">
                <ul className="topList">
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
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto" defaultActiveKey="#home">
                                    <a style={{ marginTop: "15px" }} className="topClickable" href="https://github.com/packetsss">
                                        <i className="topIcon fab fa-github-square"></i>
                                    </a>
                                    <a style={{ marginTop: "15px" }} className="topClickable" href="https://www.linkedin.com/in/paul-pan001/">
                                        <i className="topIcon fab fa-linkedin"></i>
                                    </a>
                                    <a style={{ marginTop: "15px" }} className="topClickable" href="https://www.facebook.com/paul.pan.94849/">
                                        <i className="topIcon fab fa-facebook-square"></i>
                                    </a>
                                    <a style={{ marginTop: "15px" }} className="topClickable" href="https://twitter.com/pyj2001">
                                        <i className="topIcon fab fa-twitter-square"></i>
                                    </a>
                                    <a style={{ marginTop: "15px" }} className="topClickable" href="https://www.instagram.com/_popaz/">
                                        <i className="topIcon fab fa-instagram-square"></i>
                                    </a>

                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                                            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                            as={Link}
                                            to="/about"
                                            onClick={() => updateExpanded(false)}
                                        >
                                            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                            as={Link}
                                            to="/project"
                                            onClick={() => updateExpanded(false)}
                                        >
                                            <AiOutlineFundProjectionScreen
                                                style={{ marginBottom: "2px" }}
                                            />{" "}
                                            Projects
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link
                                            as={Link}
                                            to="/resume"
                                            onClick={() => updateExpanded(false)}
                                        >
                                            <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            as={Link}
                                            to="/write"
                                            onClick={() => updateExpanded(false)}
                                        >
                                            <ImBlog style={{ marginBottom: "2px" }} /> Write
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="fork-btn">
                                        <Button
                                            href="https://github.com/packetsss"
                                            target="_blank"
                                            className="fork-btn-inner"
                                        >
                                            <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                            <AiFillStar style={{ fontSize: "1.1em" }} />
                                        </Button>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/* <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li> */}

                </ul>
            </div>
            {/* <div className="topRight">
                {user ? (<img className="topImg" src={myAvatar} alt=""></img>) : (
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>

                        <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                )}

                <i className="topSearchIcon fas fa-search"></i> */}
            {/* </div> */}
        </div>
    )
}
