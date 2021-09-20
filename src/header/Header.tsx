import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">A Journey of</span>
                <span className="headerTitleLarge">Programming</span>
            </div>
            <img className="headerImg" src={process.env.PUBLIC_URL + '/banner.png'} alt=""></img>
        </div>
    )
}
