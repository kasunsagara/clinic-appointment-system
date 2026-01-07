import "./loginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {

return(
    <div>
        <span>Email</span>
        <input/>
        <span>Password</span>
        <input/>
        <button>Login</button>
        <Link to="/">Login</Link>
    </div>
)
}
