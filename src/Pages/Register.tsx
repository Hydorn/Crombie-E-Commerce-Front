import SubmitBtn from "../Components/SubmitBtn";
import NavBar from "../Components/NavBar";
import Input from "../Components/Input";
import "./Styles/Login.css";
import "./Styles/Register.css";
import Colors from "../Components/Colors";
import FormHeader from "../Components/FormHeader";
import { FormProvider, useForm } from "react-hook-form";

const Register = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="page_register_container">
        <NavBar />
        <div className="login_container ">
          <img className="img" src="/c27bb43.svg" alt="logo" />

          {/*Begining of register form*/}
          <FormProvider {...methods}>
            <form
              className="form_container register"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <FormHeader title="sign up" />

              <div className="register_name">
                <Input
                  type="text"
                  name="first name"
                  placeholder="first name *"
                />
                <Input type="text" name="last name" placeholder="last name *" />
              </div>
              <Input type="email" name="email" placeholder="email address *" />
              <div className="register_name">
                <Input
                  type="password"
                  name="password"
                  placeholder="password *"
                />
                <Input
                  type="password"
                  name="repeat password"
                  placeholder="repeat password *"
                />
              </div>
              <SubmitBtn value="Submit" />
            </form>
          </FormProvider>
          {/*End of register form*/}
          <Colors />
        </div>
      </div>
    </>
  );
};

export default Register;
