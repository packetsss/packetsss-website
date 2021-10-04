import { useEffect, useState } from "react";
import { Particle, timeDelay, disableRefresh, getAuth } from "../../../Utils";
// import { useCookies } from "react-cookie";
import { store } from "react-notifications-component";

import "animate.css";
import "./login.css";
import "react-notifications-component/dist/theme.css";
import axiosLogin from "../../../auth/Login";
import { Link } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [cookies, setCookies] = useCookies(["myToken"]);

    async function tryLogin(body: object) {
        console.log(getAuth(body));
        axiosLogin
            .post(`/auth/token/`, getAuth(body))
            .then((resp: any) => {
                store.addNotification({
                    title: "Login Success!",
                    message: "Welcome",
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
                window.localStorage.setItem(
                    "access_token",
                    resp.data.access_token
                );
                window.localStorage.setItem(
                    "refresh_token",
                    resp.data.refresh_token
                );

                // delay for 3 sec and then redirect
                setTimeout(() => {
                    window.location.replace("#/posts");
                    window.location.reload();
                }, timeDelay);

                // setCookies("myToken", resp.data.token, { path: "/" });
            })
            .catch((err: any) => {
                store.addNotification({
                    title: "Login Failed!",
                    message:
                        "Please check your username and password and try again",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__shakeX"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: timeDelay,
                        onScreen: true,
                    },
                });
            });
    }

    // redirect to article
    useEffect(() => {
        if (localStorage.getItem("refresh_token")) {
            window.location.replace("#/posts");
        }
    }, []);

    return (
        <div>
            <Particle />
            <div className="login">
                <span className="loginTitle">Login</span>
                <form
                    className="loginForm"
                    onSubmit={(env) => {
                        disableRefresh(env);
                        tryLogin({ username, password });
                    }}
                >
                    <label>Username</label>
                    <input
                        required
                        className="loginInput"
                        type="text"
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        required
                        className="loginInput"
                        type="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="loginButton">
                        Login
                    </button>
                </form>
                <div style={{ marginTop: "5px", fontSize: 14, zIndex: 0 }}>
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    );
}
