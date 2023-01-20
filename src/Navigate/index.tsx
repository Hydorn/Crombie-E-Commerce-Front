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
import UserSettings from "Pages/UserSettings";
import EditProyect from "Pages/EditProyect";
import NewProyect from "Pages/NewProyect";

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
          <Route path="/settings" element={<UserSettings />} />
          <Route element={<AdminRoute />}>
            <Route path="/administration" element={<Admin />} />
            <Route
              path="administration/proyects/:id"
              element={<EditProyect />}
            />
            <Route
              path="/administration/new-proyect"
              element={<NewProyect />}
            />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
