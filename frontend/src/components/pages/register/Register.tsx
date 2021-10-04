import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { store } from "react-notifications-component";
import PasswordStrengthBar from "react-password-strength-bar";

import "./register.css";
import axiosLogin from "../../../auth/Login";
import { Particle, timeDelay, disableRefresh } from "../../../Utils";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    async function tryRegister(body: object) {
        axiosLogin
            .post(`/user/`, body)
            .then((resp: any) => {
                store.addNotification({
                    title: "Register Success!",
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
                setRegisterSuccess(true);
            })
            .catch((err: any) => {
                store.addNotification({
                    title: "Register Failed!",
                    message: "The username/email is not available",
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

    useEffect(() => {
        if (localStorage.getItem("refresh_token")) {
            window.location.replace("#/posts");
        }
        if (registerSuccess) {
            setTimeout(() => {
                window.location.replace("#/login");
            }, timeDelay);
        }
    }, [registerSuccess]);

    return (
        <div>
            <Particle />
            <div className="register">
                <span className="registerTitle">Register</span>
                <form
                    className="registerForm"
                    onSubmit={(env) => {
                        if (passwordStrength > 1) {
                            disableRefresh(env);
                            tryRegister({ username, email, password });
                        } else {
                            store.addNotification({
                                title: "Register Failed!",
                                message: "The password is too weak",
                                type: "danger",
                                insert: "top",
                                container: "top-right",
                                animationIn: [
                                    "animate__animated",
                                    "animate__shakeX",
                                ],
                                animationOut: [
                                    "animate__animated",
                                    "animate__fadeOut",
                                ],
                                dismiss: {
                                    duration: timeDelay,
                                    onScreen: true,
                                },
                            });
                        }
                    }}
                >
                    <label>*Username</label>
                    <input
                        required
                        className="registerInput"
                        type="text"
                        placeholder="Enter your username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>*Email</label>
                    <input
                        required
                        type="email"
                        className="registerInput"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>*Password</label>
                    <input
                        required
                        className="registerInput"
                        type="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <PasswordStrengthBar
                        scoreWordStyle={{
                            textAlign: "left",
                            paddingLeft: "5px",
                        }}
                        password={password}
                        minLength={8}
                        shortScoreWord={"weak"}
                        onChangeScore={(score) => setPasswordStrength(score)}
                    />

                    <button className="registerButton" type="submit">
                        Register
                    </button>
                </form>
                <div style={{ marginTop: "5px", fontSize: 14, zIndex: 0 }}>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    );
}
