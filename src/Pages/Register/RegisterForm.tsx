import { FormProvider, useForm } from "react-hook-form";
import url from "constant";
import FormHeader from "Components/FormHeader";
import SubmitBtn from "Components/SubmitBtn";
import Input from "Components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const methods = useForm();

  const onSubmit = async (formData: any) => {
    try {
      setLoading(true);
      const res = await fetch(url + "/auth/register", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) setError(data);
      else navigate("/login");
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
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
        <div className="error_cont">
          {error ? <span className="error">&#9888; {error}</span> : null}
          <SubmitBtn loading={loading} value="Register" />
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
