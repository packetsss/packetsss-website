import "dotenv/config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Particles from "react-particles-js";
import Resizer from "react-image-file-resizer";

import axiosAccess from "../../auth/Access";
import da from "../../Assets/defaultAvatar.jpg";

export const isDeployed = process.env["NODE_ENV"] !== "development";

let basesURL = "";

if (isDeployed) {
    basesURL = "https://packetsss-django-backend.herokuapp.com";
} else {
    basesURL = "http://127.0.0.1:8000";
}

export const baseURL = basesURL;

export const defaultAvatar = da;

export function delay(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

export const getAuth = (body: any, grantType: string = "password") => {
    return {
        ...body,
        grant_type: grantType,
        client_id: "C1cGDN1IJHXnCzidp9HP6rR7pxxOGh8lztUn6riP",
    };
};

// delete all cookies
export function removeTokens() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("expires_in");
    axiosAccess.defaults.headers!.Authorization = "";
}

// use when submitting forms
export function disableRefresh(event: any) {
    event.preventDefault();
}

export function autoResizeTextarea(e: any) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
}

// delay for notifications
export const timeDelay: number = 1500;

export function getDate(now: string) {
    let options: any = { year: "numeric", month: "long", day: "numeric" };
    return new Date(now).toLocaleDateString("en-US", options);
}

export function randomRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export function encodeRoomName(string: string) {
    var number = "0x";
    var length = string.length;
    for (var i = 0; i < length; i++)
        number += string.charCodeAt(i).toString(16);
    return number;
}

export function decodeRoomName(number: string) {
    var string = "";
    number = number.slice(2);
    var length = number.length;
    for (var i = 0; i < length; ) {
        var code = number.slice(i, (i += 2));
        string += String.fromCharCode(parseInt(code, 16));
    }
    return string;
}

// image resizing
export function resizeImage(file: any) {
    return new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300, // maxWidth
            300, // maxHeight
            "JPEG", // compressFormat
            100, // quality
            0, // rotation
            // responseUriFunc
            (uri) => {
                resolve(uri);
            },
            "blob", // outputType
            200, // minWidth
            200 // minHeight
        );
    });
}

export function Particle() {
    return (
        <Particles
            style={{ position: "relative", zIndex: -999 }}
            params={{
                particles: {
                    color: {
                        value: "#000000",
                    },
                    collisions: {
                        enable: true,
                    },
                    number: {
                        value: 300,
                        density: {
                            enable: true,
                            value_area: 2500,
                        },
                    },
                    line_linked: {
                        enable: false,
                        opacity: 0.03,
                    },
                    move: {
                        direction: "none",
                        outMode: "bounce",
                        random: true,
                        speed: 1,
                    },
                    size: {
                        random: true,
                        value: 2,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                interactivity: {
                    detect_on: "window",
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}
        />
    );
}
