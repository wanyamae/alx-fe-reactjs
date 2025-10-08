import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
      <h2>Blog Page</h2>
      <ul>
        <li><Link to="/blog/1">Post 1</Link></li>
        <li><Link to="/blog/2">Post 2</Link></li>
      </ul>
    </div>
  );
}