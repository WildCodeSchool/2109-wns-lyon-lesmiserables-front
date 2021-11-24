import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ProjectPage from "./pages/ProjectPage";
import MyProjectPage from "./pages/MyProjectPage";
import DashboardPage from "./pages/DashboardPage";

const App = (): JSX.Element => {
  return (
    <Router>
      <div>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/Project" element={<ProjectPage />} />
          <Route path="/MyProject" element={<MyProjectPage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
