import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user: boolean = true;
    return (
        <div className="top">
            <div className="topLeft">
                <a className="topClickable" href="https://github.com/packetsss">
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
                </a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>

                </ul>
            </div>
            <div className="topRight">
                {user ? (<img className="topImg" src={process.env.PUBLIC_URL + '/avatar.jpeg'} alt=""></img>) : (
                    <ul className="topList">
                        <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>

                        <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                    </ul>
                )}

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
