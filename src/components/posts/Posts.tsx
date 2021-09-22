import Post from "../post/Post";
import SinglePost from "../singlePost/SinglePost";
import "./posts.css";

export default function Posts() {
	return (
		<div className="posts">
			<Post />
			<SinglePost />
		</div>
	);
}
