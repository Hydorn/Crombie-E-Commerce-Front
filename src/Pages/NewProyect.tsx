import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import url from "constant";
import { useUserContext } from "Context/userContext";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const NewProyect = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useUserContext();
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      setLoading(true);
      const res = await fetch(url + "/proyects", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const fetched = await res.json();

      setLoading(false);
      if (res.ok) return navigate("/administration");
      setError(fetched);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
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
              {error ? <span className="error">&#9888; {error}</span> : null}
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
