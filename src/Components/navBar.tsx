import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext";
import NavMenu from "./NavMenu";
import "./Styles/navBar.css";

const NavBar = () => {
  const { logged, firstName, admin, handleSetValues } = useUserContext();
  let navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleLogOut = () => {
    handleSetValues("token", "");
    handleSetValues("logged", false);
    localStorage.removeItem("token");
    return navigate("/login");
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header_logo_cont">
          <img className="header_img" src="/logo.svg" alt="logo" />
        </div>
      </Link>
      {logged ? (
        <>
          <div
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
            className="btn_user"
          >
            <p>{`Bienvenido ${firstName ? firstName : ""}`}</p>
            <NavMenu menu={menu} onClickLogOut={handleLogOut} />
          </div>
        </>
      ) : (
        <div className="btn_container">
          <div className="header_btn">
            <Link to={"/login"}>LOGIN</Link>
          </div>
          <div className="header_btn">
            <Link to={"/register"}>REGISTER</Link>
          </div>
        </div>
      )}
    </header>
  );
};
export default NavBar;
