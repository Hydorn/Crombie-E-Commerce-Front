import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import url from "constant";
import { useUserContext } from "Context/userContext";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const NewProyect = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useUserContext();
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    try {
      setLoading(true);
      fetch(url + "/proyects", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  });

  return (
    <>
      <NavBar />
      <div className="settings">
        <h1 className="settings_title">New Proyect</h1>
        <div className="settings_container">
          <FormProvider {...methods}>
            <form className="settings_form" onSubmit={onSubmit}>
              <UserPropery name="Proyect Name: " keyName="name" value={""} />
              <UserPropery
                name="Description: "
                keyName="description"
                value={""}
              />
              <UserPropery
                name="Contact Email: "
                keyName="contactEmail"
                value={""}
              />
              <div className="user_btn_container">
                <SubmitBtn value={"Submit"} loading={loading} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
export default NewProyect;
