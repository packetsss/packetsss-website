import { disableRefresh } from "../../../Utils";
import "./setting.css";

function logout() {
    document.cookie.split(";").forEach((c) => {
        document.cookie = c
            .replace(/^ +/, "")
            .replace(
                /=.*/,
                "=;expires=" + new Date().toUTCString() + ";path=/"
            );
    });
    window.location.replace("#/");
}

export default function Setting() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">
                        Update Your Account
                    </span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm" onSubmit={disableRefresh}>
                    <label>
                        ONLY THE LOGOUT BUTTON WORKS FOR NOW //Profile Picture
                    </label>
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
                    <input
                        type="email"
                        placeholder="safak@gmail.com"
                        name="email"
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                    />
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
        </div>
    );
}
