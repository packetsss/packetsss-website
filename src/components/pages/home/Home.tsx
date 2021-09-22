import "./home.css";
import Typewriter from "typewriter-effect";
import { Container } from "react-bootstrap";
import { Particle } from "../../../Utils";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Developer",
					"Deep Learning Engineer",
					"MERN Stack Developer",
					"Open Source Contributor",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default function Home() {
	return (
		<Container fluid className="home">
			<Container>
				<Particle />
				<div className="homeTitles">
					<span className="homeTitleLarge">Hello, I am Paul Pan</span>
					<span className="homeTitleSmall">
						<Type />
					</span>
				</div>
			</Container>
		</Container>
	);
}
