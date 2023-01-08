import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProyectDetails from "Pages/ProyectDetails";
import Register from "Pages/Register";
import ErrorPage from "Pages/Error";
import Profile from "Pages/Profile";
import LogedRoute from "./LogedRoute";
import AdminRoute from "./AdminRoute";
import Login from "Pages/Login";
import Admin from "Pages/Admin";
import Home from "Pages/Home";

const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="proyects/:id" element={<ProyectDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<LogedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route element={<AdminRoute />}>
            <Route path="/administration" element={<Admin />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
