import NavBar from "../../Components/NavBar";
import "../Styles/Login.css";
import "../Styles/Register.css";
import Colors from "../../Components/Colors";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <div className="page_register_container">
        <NavBar />
        <div className="login_container ">
          <img className="img" src="/c27bb43.svg" alt="logo" />
          <RegisterForm />
          <Colors />
        </div>
      </div>
    </>
  );
};

export default Register;
