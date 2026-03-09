import { useParams } from "react-router-dom";

function BlogPost() {
  const { postId } = useParams();

  return <div><h1>Blog Post ID: {postId}</h1></div>;
}

export default BlogPost;