import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import ProjectPage from "../../pages/ProjectPage";
import MyProjectPage from "../../pages/MyProjectPage";
import DashboardPage from "../../pages/DashboardPage";

const HeaderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/Project" element={<ProjectPage />} />
      <Route path="/MyProject" element={<MyProjectPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default HeaderRoutes;
