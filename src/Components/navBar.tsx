import { Link } from "react-router-dom";
import "./Styles/navBar.css";
const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <div className="header_logo_cont">
          <img className="header_img" src="/logo.svg" alt="logo" />
        </div>
      </Link>
      <div className="btn_container">
        <div className="header_btn">
          <Link to={"/login"}>LOGIN</Link>
        </div>
        <div className="header_btn">
          <Link to={"/register"}>REGISTER</Link>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
