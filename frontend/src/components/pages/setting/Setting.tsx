import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { confirmAlert } from "react-confirm-alert";
import { store } from "react-notifications-component";
import { Particle, disableRefresh, timeDelay, backendHostAddr } from "../../../Utils";
import "./setting.css";

function logout() {
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

  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  setTimeout(() => {
    window.location.replace("#/");
    window.location.reload();
  }, timeDelay);
}

function confirmDelete(props: any, token: string) {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to delete this post?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            fetch(`${backendHostAddr}/api/users`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: token,
                },
              });
            window.location.replace("#/posts");
          },
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  }

export default function Setting() {
  useEffect(() => {
    if (!document.cookie) {
      window.location.replace("#/login");
      window.location.reload();
    }
  });
  return (
    <Container className="settings">
      <Particle />
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete"><a href="">Delete Account</a></span>
        </div>
        <form className="settingsForm" onSubmit={disableRefresh}>
          <label>ONLY THE LOGOUT BUTTON WORKS FOR NOW //Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button
            className="btn btn-secondary settingsSubmitButton"
            type="submit"
          >
            Update
          </button>
          <button
            className="btn btn-warning settingsLogoutButton"
            onClick={logout}
          >
            Logout
          </button>
        </form>
      </div>
    </Container>
  );
}
