import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/Project">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/MyProject">
            My Project
          </Link>
        </li>
        <li>
          <Link className="link" to="/Dashboard">
            Dashboard
          </Link>
        </li>
        <li className="right">
          <Link className="link" to="/SignUp">
            Sign Up
          </Link>
        </li>
        <li className="right">
          <Link className="link" to="/SignIn">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
