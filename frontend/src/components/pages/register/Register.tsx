import { useEffect, useState } from "react";
import { store } from "react-notifications-component";

import "./register.css";
import {
  Particle,
  timeDelay,
  disableRefresh,
  backendHostAddr,
} from "../../../Utils";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);

  async function tryRegister(body: object) {
    try {
      const resp = await fetch(`${backendHostAddr}/api/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const resp_1 = resp.json();
      resp_1.then((result) => {
        if (typeof result.username === "string") {
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
          setRegisterSuccess(!registerSuccess);
        } else {
          store.addNotification({
            title: "Register Failed!",
            message: "This username is not available",
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
        }
      });
      return await resp_1;
    } catch (err) {
      return console.error(err);
    }
  }

  useEffect(() => {
    if (document.cookie) {
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
        <form className="registerForm" onSubmit={disableRefresh}>
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
          <button
            className="registerButton"
            type="submit"
            onClick={() => tryRegister({ username, email, password })}
          >
            Register
          </button>
        </form>
        <div style={{ marginTop: "5px", fontSize: 14, zIndex: 0 }}>
          Already have an account? <a href="#/login/">Login</a>
        </div>
      </div>
    </div>
  );
}