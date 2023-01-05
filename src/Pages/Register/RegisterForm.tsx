import { FormProvider, useForm } from "react-hook-form";
import { useUserContext } from "../../Context/userContext";
import url from "../../constant";
import FormHeader from "../../Components/FormHeader";
import SubmitBtn from "../../Components/SubmitBtn";
import Input from "../../Components/Input";

const RegisterForm = () => {
  const { handleSetValues, ...values } = useUserContext();
  const methods = useForm();

  const onSubmit = async (formData: any) => {
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
      console.log(data);
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
        <SubmitBtn loading value="Submit" />
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
