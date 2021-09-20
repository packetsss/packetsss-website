import "./singlepost.css"
import angelImg from "../../Assets/landscape_2.png"

export default function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src={angelImg} alt="" />
                <h1 className="singlePostTitle">
                    The Post of Evil
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Packetsss</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    The Post of Evil, created by AI, reveals an enormous number of plots by the greatest villains of all time, from King Arthur to Count Dracula, from Hannibal Lecter to Edward Cullen—but how did we get here? What drove the evil, the demons, the madmen to create one of horror's greatest monsters?
                </p>
            </div>
        </div>
    )
}
