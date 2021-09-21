import Particles from "react-particles-js";

export function Particle() {
    return (
        <Particles
            params={{
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#f5f0f0",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
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