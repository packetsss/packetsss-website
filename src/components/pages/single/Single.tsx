import SideBar from "../../sidebar/SideBar"
import SinglePost from "../../singlePost/SinglePost"
import "./single.css"

export default function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <SideBar/>
        </div>
    )
}
