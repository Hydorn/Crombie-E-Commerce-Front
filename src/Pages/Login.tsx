import Input from "../Components/input";
import { AiFillLock } from "react-icons/ai";
import "./Styles/Login.css";
import SubmitBtn from "../Components/submitBtn";
import NavBar from "../Components/navBar";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className="login_container">
        <img className="img" src="/c27bb43.svg" alt="logo" />
        <div className="form_container">
          <div className="icon_container">
            <AiFillLock className="icon" />
          </div>
          <h2 className="title">Sign in</h2>
          <Input type="email" placeholder="email address *" />
          <Input type="password" placeholder="password *" />
          <SubmitBtn value="Submit" />
        </div>
        <div className="no_img">
          <div className="color1"></div>
          <div className="color2"></div>
          <div className="color3"></div>
          <div className="color4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
