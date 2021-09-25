import "./projects.css";
import { ProjectCard } from "./Utils";
import { Particle } from "../../../Utils";
import { Container, Row, Col } from "react-bootstrap";

import poolKick from "../../../Assets/pool_kick.gif";
import poolSolver from "../../../Assets/pool_solver.gif";
import chatBot from "../../../Assets/chatbot.jpg";
import imgEditor from "../../../Assets/image_editor.gif";
import sudoku from "../../../Assets/sudoku.gif";

export default function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={poolSolver}
                            isBlog={false}
                            title="Pool Game Solver"
                            description="A realistic pool game simulator built using pygame and pymunk with extra support for reinforcement learning model training. The genetic algorithm (GA) was implemented to solve the pool game environment."
                            link="https://github.com/packetsss/youtube-projects/tree/main/pool-game"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={chatBot}
                            isBlog={false}
                            title="Discord Bot"
                            description="A Chat bot deployed in Packetsss's discord server that is capable of doing conversation, translation, summarization , text generation, image classification, image generation and etc. Created using discord.py and pre-trained transformer models.&nbsp;&nbsp;"
                            clickAble={{
                                text: "Join Here",
                                link: "https://discord.gg/nDKKffMMjB",
                            }}
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={poolKick}
                            isBlog={false}
                            title="AI Pool Assist"
                            description="An AI using computer vision and object detection as table and billiard ball locator, and visualizing aiming path for pool cue and balls. A search algorithm is implemented to find the best shot for the current player."
                            link="https://github.com/packetsss/pool-player"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={imgEditor}
                            isBlog={false}
                            title="Image Editor"
                            description="A Image Editor that provides useful editing features such as crop, rotate, change brightness, auto sharpen, auto bypass censorship, face detection, and etc."
                            link="https://github.com/packetsss/Image-Editor"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={sudoku}
                            isBlog={false}
                            title="Sudoku Solver"
                            description="A Sudoku Solver using back tracking and additional optimizations that solves any Sudoku puzzles in 2 seconds. A GUI is also implemented as a ease of use."
                            link="https://github.com/packetsss/Sudoku-Solver"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
