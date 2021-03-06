import { useState } from "react";
import Card from "react-bootstrap/Card";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
import { SiPytorch, SiTensorflow } from "react-icons/si";
import { DiJavascript1, DiReact, DiPython } from "react-icons/di";
import { SiLinux, SiVisualstudiocode, SiJupyter } from "react-icons/si";

export function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        A student at UC San Diego who love Machine Learning and
                        always looking forward to learn new stuff.
                        <br />
                        <br />
                        Apart from coding, these are some other activities I
                        enjoys doing!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Eating bananas
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Eating more bananas
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Eating even more bananas
                        </li>
                    </ul>

                    <p style={{ marginBlockEnd: 0, color: "#be9656" }}>
                        "I also eat code. Beep. Beep"
                    </p>
                    <footer className="blockquote-footer">
                        <i style={{ color: "#be9656" }}>Packetsss</i>
                    </footer>
                    <LaughterHook />
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span className="iconify" data-icon="simple-icons:numpy"></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:pandas"
                ></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPytorch />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow />
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:opencv"
                ></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:openaigym"
                ></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span className="iconify" data-icon="simple-icons:numba"></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span className="iconify" data-icon="simple-icons:qt"></span>
            </Col>
        </Row>
    );
}

export function Github() {
    const colourTheme = {
        background: "transparent",
        text: "#ffffff",
        level4: "#875503",
        level3: "#b07515",
        level2: "#dea549",
        level1: "#ffcd7d",
        level0: "#fff5e6",
    };
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Total <strong className="purple">Contributions</strong>
            </h1>
            <GitHubCalendar
                username="packetsss"
                blockSize={20}
                blockMargin={3}
                theme={colourTheme}
                fontSize={16}
            />
        </Row>
    );
}

export function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJupyter />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span className="iconify" data-icon="simple-icons:git"></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:docker"
                ></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span className="iconify" data-icon="simple-icons:mysql"></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:postman"
                ></span>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <span
                    className="iconify"
                    data-icon="simple-icons:heroku"
                ></span>
            </Col>
        </Row>
    );
}

// Two ways of creating hooks
/*
// using class

class Laughter extends Component<any, { count: number }> {
	constructor(props: any) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	clicking = () => {
		this.setState({
			count: this.state.count + 1,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.clicking} className="btn btn-success">
					{this.state.count === 0
						? "lol"
						: `lol x ${this.state.count}`}
				</button>
			</div>
		);
	}
}
*/

// using react hook function
function LaughterHook() {
    // pass in initial value (number, str, object...)
    // when using objects or arrays, we want to merge the values (copy and add new ones)

    const [count, setCount] = useState(0);
    const [text, setText] = useState("lol");

    return (
        <div>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setText(text + "ol");
                }}
                className="btn btn-success"
            >
                {count === 0 ? text : `${text} x ${count}`}
            </button>
        </div>
    );
}
