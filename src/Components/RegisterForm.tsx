import { FormProvider, useForm } from "react-hook-form";
import { useUserContext } from "../Context/userContext";
import FormHeader from "./FormHeader";
import Input from "./Input";
import "./Styles/registerForm.css";
import SubmitBtn from "./SubmitBtn";

const RegisterForm = () => {
  const { handleSetValues, ...values } = useUserContext();
  const methods = useForm();

  const onSubmit = async (formData: any) => {
    const url = "http://localhost:3000/api";
    console.log(formData);
    try {
      const res = await fetch(url + "/auth/register", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        className="form_container register"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormHeader title="sign up" />

        <div className="register_name">
          <Input type="text" name="firstName" placeholder="first name *" />
          <Input type="text" name="lastName" placeholder="last name *" />
        </div>
        <Input type="email" name="email" placeholder="email address *" />
        <div className="register_name">
          <Input type="password" name="password" placeholder="password *" />
          <Input
            type="password"
            name="repeatPassword"
            placeholder="repeat password *"
          />
        </div>
        <SubmitBtn value="Submit" />
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
