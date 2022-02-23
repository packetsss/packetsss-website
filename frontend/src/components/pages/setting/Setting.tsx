import FormData from "form-data";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { store } from "react-notifications-component";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PasswordStrengthBar from "react-password-strength-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axiosAccess from "../../../auth/Access";
import {
    Particle,
    disableRefresh,
    timeDelay,
    removeTokens,
    resizeImage,
    defaultAvatar,
} from "../../utils/Utils";
import "./setting.css";

export function logout() {
    store.addNotification({
        title: "Logout Success!",
        message: "You have successfully logged out",
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
    removeTokens();

    setTimeout(() => {
        window.location.replace("#/");
        window.location.reload();
    }, timeDelay);
}

function confirmDelete(user: any) {
    confirmAlert({
        title: "Confirm to delete",
        message:
            "Are you sure to delete you account? (WARNING: THIS ACTION IS NOT RECOVERABLE!)",
        buttons: [
            {
                label: "Yes",
                onClick: () => {
                    axiosAccess
                        .delete(`/user/${user.id}/`)
                        .then((resp: any) => {
                            removeTokens();
                            window.location.replace("#/login");
                            window.location.reload();
                        });
                },
            },
            {
                label: "No",
                onClick: () => null,
            },
        ],
    });
}
async function updateAvatar(imgUpload: any, user: any) {
    const img = imgUpload.target.files[0];
    const imgName = img.name;
    const newImg = await resizeImage(img);
    const formData = new FormData();

    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("avatar", newImg, imgName);

    // console.log(formData, img.target.files);
    axiosAccess
        .patch(`/user/${user.id}/`, formData, {
            headers: {
                "Content-Type":
                    "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
            },
        })
        .then((resp: any) => {
            store.addNotification({
                title: "Profile Picture Update Success!",
                message: "You have successfully updated your avatar",
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
            // reload the window
        })
        .catch((err: any) => {
            console.log(err.response);
            store.addNotification({
                title: "Profile Picture Update Failed!",
                message: err.response,
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
        })
        .finally(() => {
            setTimeout(() => window.location.reload(), timeDelay);
        });
}

function updatePassword(props: any, password: string) {
    console.log(props, password);
    axiosAccess
        .patch(`/user/${props.id}/`, { password: password })
        .then((resp: any) => {
            store.addNotification({
                title: "Profile Update Success!",
                message: "You have successfully updated your profile",
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
        })
        .catch((err: any) => {
            console.log(err);
        })
        .finally(() => {
            setTimeout(() => window.location.reload(), timeDelay);
        });
}

export default function Setting() {
    const eye = <FontAwesomeIcon icon={faEye} />;
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    useEffect(() => {
        if (!localStorage.getItem("refresh_token")) {
            window.location.replace("#/login");
            window.location.reload();
        }
    });
    useEffect(() => {
        localStorage.getItem("refresh_token") ? (
            axiosAccess.get(`/user/`).then((resp: any) => {
                setUser(resp.data[0]);
            })
        ) : (
            <div></div>
        );
    }, []);

    const [user, setUser] = useState<any>();
    const [passwordChange, setPasswordChange] = useState<any>();
    const [passwordStrength, setPasswordStrength] = useState(0);

    // console.log(user);

    return (
        <Container>
            <Particle />
            <Container className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">
                            Update Your Account
                        </span>
                    </div>
                    <form
                        className="settingsForm"
                        onSubmit={(env) => {
                            disableRefresh(env);
                            if (passwordStrength > 1) {
                                updatePassword(user, passwordChange);
                            } else {
                                store.addNotification({
                                    title: "Password Update Failed!",
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
                                        duration: timeDelay / 2,
                                        onScreen: true,
                                    },
                                });
                            }
                        }}
                    >
                        <div className="settingsPP">
                            {user ? (
                                <img
                                    src={
                                        user.avatar
                                            ? user.avatar
                                            : defaultAvatar
                                    }
                                    alt=""
                                />
                            ) : null}

                            <label>
                                <input
                                    accept="image/png, image/gif, image/jpeg"
                                    style={{ display: "none" }}
                                    multiple
                                    type="file"
                                    onChange={(img) => {
                                        updateAvatar(img, user);
                                    }}
                                />
                                <i className="settingsPPIcon far fa-user-circle"></i>
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: "none" }}
                                className="settingsPPInput"
                            />
                        </div>
                        <span className="settingsDescribeField">Username</span>
                        <span className="settingsFixedField">
                            {user ? user.username : null}
                        </span>
                        <span className="settingsDescribeField">Email</span>
                        <span className="settingsFixedField">
                            {user ? user.email : null}
                        </span>
                        <span className="settingsDescribeField">Password</span>
                        <div className="passwordWrapper">
                            <input
                                placeholder="Password"
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                onChange={(pass) => {
                                    setPasswordChange(pass.target.value);
                                }}
                            />
                            <i
                                style={{
                                    color: passwordShown
                                        ? "#000000"
                                        : "#7a7a7a",
                                }}
                                onClick={togglePasswordVisibility}
                            >
                                {passwordShown ? eye : eyeSlash}
                            </i>
                        </div>
                        <PasswordStrengthBar
                            className="settingsPasswordStrengthBar"
                            scoreWordStyle={{
                                textAlign: "left",
                                paddingLeft: "5px",
                            }}
                            password={passwordChange}
                            minLength={8}
                            shortScoreWord={"weak"}
                            onChangeScore={(score) =>
                                setPasswordStrength(score)
                            }
                        />
                        <button
                            className="btn btn-secondary settingsSubmitButton"
                            type="submit"
                            // onClick={(data) => {
                            //     handleSubmit(updatePassword);
                            //     return 1;
                            // }}
                        >
                            Change Password
                        </button>
                        <button
                            className="btn btn-warning settingsLogoutButton"
                            onClick={logout}
                            type="button"
                        >
                            Logout
                        </button>
                        <button
                            className="btn settingsDeleteAccountButton"
                            onClick={() => {
                                confirmDelete(user);
                            }}
                            type="button"
                        >
                            Delete Account
                        </button>
                    </form>
                </div>
            </Container>
        </Container>
    );
}
