import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginFormStyles.css";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const LoginData = {
      email,
      password,
    };

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginData),
    })
      .then((res) => res.json())
      .then((data) =>
        localStorage.setItem("token", String(data.payload?.token))
      )
      .catch((err) => {
        console.log(err.message);
      });
    const token = localStorage.getItem("token");
    console.log(token);

    if (token) navigate("/user");
  };

  return (
    <div className="form_container">
      <h1 className="title">LOGIN</h1>
      <form action="POST" className="form" onSubmit={(e) => handleSubmit(e)}>
        <label className="label">
          e-mail
          <input
            className="input"
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="label">
          password
          <input
            className="input"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value={"SUBMIT"} className={"submit_btn"} />
      </form>
    </div>
  );
};
export default LoginForm;
