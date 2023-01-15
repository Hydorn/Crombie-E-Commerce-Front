import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useUserContext } from "Context/userContext";
import FormHeader from "Components/FormHeader";
import SubmitBtn from "Components/SubmitBtn";
import Input from "Components/Input";
import url from "constant";
import "../Styles/Login.css";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { handleSetValues } = useUserContext();
  const methods = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await fetch(url + "/auth/login", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const value = await res.json();

      setLoading(false);
      if (res.ok) {
        localStorage.setItem("token", value.payload);
        handleSetValues("token", value.payload);
      } else {
        setError(value);
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="form_container"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <FormHeader title="sign in" />

        <Input type="email" name="email" placeholder="email address *" />

        <Input type="password" name="password" placeholder="password *" />
        <div className="error_cont">
          {error ? <span className="error">&#9888; {error}</span> : null}
          <SubmitBtn loading={loading} value="Login" />
        </div>
      </form>
    </FormProvider>
  );
};
export default LoginForm;
