import "./header.css"
import bannerImg from "../../Assets/banner.png"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">A Journey of</span>
                <span className="headerTitleLarge">Programming</span>
            </div>
            <img className="headerImg" src={bannerImg} alt=""></img>
        </div>
    )
}
