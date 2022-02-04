import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Particles from "react-particles-js";
import axiosAccess from "./auth/Access";

// export const baseURL = "https://packetsss-django-backend.herokuapp.com";
export const baseURL = "http://127.0.0.1:8000";

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

// delay for notifications
export const timeDelay: number = 2000;

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


