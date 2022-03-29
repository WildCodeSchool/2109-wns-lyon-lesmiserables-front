import { Routes, Route } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Home from "../views/Auth/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Auth from "../views/Auth"
import Verify from "../views/Auth/Verify"

const HeaderRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Auth />} /> */}

      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Auth />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default HeaderRoutes;
