import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/profile">Go to Profile</Link> |{" "}
      <Link to="/blog/123">Go to Blog Post 123</Link>
    </div>
  );
}

export default Home;