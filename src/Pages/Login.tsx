import { FormProvider, useForm } from "react-hook-form";
import "./Styles/Login.css";
import Input from "../Components/Input";
import SubmitBtn from "../Components/SubmitBtn";
import NavBar from "../Components/NavBar";
import Colors from "../Components/Colors";
import FormHeader from "../Components/FormHeader";

const Login = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
      <NavBar />
      <div className="login_container">
        <img className="img" src="/c27bb43.svg" alt="logo" />

        <FormProvider {...methods}>
          <form
            className="form_container"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <FormHeader title="sign in" />
            <Input type="email" name="email" placeholder="email address *" />
            <Input type="password" name="password" placeholder="password *" />
            <SubmitBtn value="Submit" />
          </form>
        </FormProvider>

        <Colors />
      </div>
    </>
  );
};

export default Login;
