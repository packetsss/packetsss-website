import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Particles from "react-particles-js";

export const backendHostAddr = "https://packetsss-django-backend.herokuapp.com"

// delete all cookies
export function eraseCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var spcook = cookies[i].split("=");
        document.cookie =
            spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";
    }
}

// use when submitting forms
export function disableRefresh(event: any) {
    event.preventDefault();
}

// delay for notifications
export const timeDelay: number = 2000;

const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

export function getDate(now: string) {
    let time = now.split("-");
    let currentDate = `${monthNames[parseInt(time[1], 10) - 1]} ${time[2]}, ${
        time[0]
    }`;
    return currentDate;
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

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
