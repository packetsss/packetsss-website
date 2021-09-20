import "./sidebar.css"
import myImg from "../../Assets/my_pic.png"

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src={myImg} alt=""></img>
                <p>
                    I'm Paul Pan, a second year Mechanical Engineer at UC San Diego. I love Machine Learning and I'm always looking forward to learn new stuff.
                    <li>😄 Pronouns: He/Him/is</li>
                    <li>⚡ Fun fact: I like to eat more bananas (non-fun-fact).</li>
                    <li>🔭 I’m currently working on automating mannequins.</li>
                    <li>🌱 I’m currently studying transfer learning in reinforcement learning.</li>
                    <li>🤔 I’m looking for help with some machine learning frameworks.</li>
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <a className="sidebarClickable" href="https://github.com/packetsss">
                        <i className="sidebarIcon fab fa-github-square"></i>
                    </a>
                    <a className="sidebarClickable" href="https://www.linkedin.com/in/paul-pan001/">
                        <i className="sidebarIcon fab fa-linkedin"></i>
                    </a>
                    <a className="sidebarClickable" href="https://www.facebook.com/paul.pan.94849/">
                        <i className="sidebarIcon fab fa-facebook-square"></i>
                    </a>
                    <a className="sidebarClickable" href="https://twitter.com/pyj2001">
                        <i className="sidebarIcon fab fa-twitter-square"></i>
                    </a>
                    <a className="sidebarClickable" href="https://www.instagram.com/_popaz/">
                        <i className="sidebarIcon fab fa-instagram-square"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
