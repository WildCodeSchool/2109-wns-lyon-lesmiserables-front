import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SignUp">Sign Up</Link>
        </li>
        <li>
          <Link to="/SignIn">Sign In</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/MyProject">My Project</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
