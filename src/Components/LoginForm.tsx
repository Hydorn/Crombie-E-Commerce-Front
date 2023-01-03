import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useUserContext } from "../Context/userContext";
import FormHeader from "./FormHeader";
import Input from "./Input";
import LoadingSpiner from "./LoadingSpiner";
import "./Styles/loginForm.css";
import SubmitBtn from "./SubmitBtn";

/*
    console.log(data);

    */

const LoginForm = () => {
  const [Loading, setLoading] = useState(false);
  const { handleSetValues, ...values } = useUserContext();
  const methods = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    const url = "http://localhost:3000/api";
    try {
      const res = await fetch(url + "/auth/login", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const value = await res.json();
      console.log(value.payload);
      localStorage.setItem("token", value.payload);
      handleSetValues("token", value.payload);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  if (Loading) {
    return <LoadingSpiner />;
  } else {
    return (
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
    );
  }
};
export default LoginForm;
