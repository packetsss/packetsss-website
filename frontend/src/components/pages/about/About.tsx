import "./about.css";
import { Github, Toolstack, AboutCard, Techstack } from "./AboutTools";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/my_pic_2.gif";
import { Particle } from "../../../Utils";

function About() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                        }}
                    >
                        <h1
                            style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                        >
                            Knowing Who <strong className="purple">I AM</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img
                            src={myImg}
                            alt="about"
                            width="300"
                            className="tech-icons"
                        />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset </strong>
                </h1>

                <Techstack />

                <h1 className="project-heading">
                    Development <strong className="purple">Tools</strong>
                </h1>
                <Toolstack />

                <Github />
            </Container>
        </Container>
    );
}

export default About;
