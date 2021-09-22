import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {
	AiFillGithub,
	AiFillInstagram,
	AiFillLinkedin,
	AiFillFacebook,
	AiOutlineTwitter,
} from "react-icons/ai";

export default function BottomBar() {
	let date = new Date();
	let year = date.getFullYear();
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copyright">
					<h3>Designed and Developed by Paul Pan</h3>
				</Col>
				<Col md="4" className="footer-copyright">
					<h3>Copyright © {year} Packetsss</h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/packetsss"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/paul-pan001/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillLinkedin />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.facebook.com/paul.pan.94849/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillFacebook />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://twitter.com/pyj2001"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineTwitter />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/_popaz/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}
