import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import Home from "../views/Home";
import Login from "../views/Auth/Login";
import Register from "../views/Auth/Register";
import Auth from "../views/Auth";
import Verify from "../views/Auth/Verify";
import { useAuth } from "../utils/hooks/auth.hook";

function HeaderRoutes(): JSX.Element {
  const { isConnected } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={isConnected ? <Home /> : <Navigate replace to='/auth' />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/dashboard" element={ isConnected ? <Dashboard /> : <Navigate replace to='/auth' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HeaderRoutes;
