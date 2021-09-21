import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

type Props = {
    imgPath: string;
    title: string;
    description: string;
    clickAble?: {
        link: string;
        text: string;
    };
    link?: string;
    isBlog: boolean;
}

export function ProjectCard(props: Props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                
                <Button variant="primary" href={props.link ? props.link : props.clickAble.link} target="_blank">
                    <BiLinkExternal /> &nbsp;
                    {props.link ? (props.isBlog ? "View Blog" : "View Project") : props.clickAble.text}
                </Button>
            </Card.Body>
        </Card>
    );
}
