import "../Styles/Login.css";
import NavBar from "Components/NavBar";
import Colors from "Components/Colors";
import LoginForm from "./LoginForm";
import { useUserContext } from "Context/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { logged } = useUserContext();
  let navigate = useNavigate();
  useEffect(() => {
    if (logged) return navigate("/");
  }, [logged, navigate]);
  return (
    <>
      <NavBar />
      <div className="login_container">
        <img className="img" src="/c27bb43.svg" alt="logo" />
        <LoginForm />
        <Colors />
      </div>
    </>
  );
};

export default Login;
