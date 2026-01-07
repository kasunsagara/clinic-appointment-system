import "./homePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>Welcome to Our App</h1>
      <p>Your one-stop place to manage everything easily.</p>

      <div className="home-buttons">
        <button>Login</button>
        <button className="secondary">Sign Up</button>
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
}
