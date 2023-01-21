import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import url from "constant";
import { useUserContext } from "Context/userContext";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FetchedUser } from "Utilities/types";
import "./Styles/UserSettings.css";

const UserSettings = () => {
  const [userProperties, setUserProperties] = useState<FetchedUser>();
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { token, handleSetValues } = useUserContext();
  const methods = useForm();

  const fetchUser = () => {
    fetch("http://localhost:3000/api/me", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: FetchedUser) => {
        setUserProperties(data);
      });
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  const handleOnCLick = () => {
    setDisabled(!disabled);
  };

  const onSubmit = methods.handleSubmit(async (formData) => {
    try {
      setLoading(true);
      const reqBody = {
        id: userProperties?.id,
        ...formData,
      };

      const res = await fetch(url + "/user", {
        body: JSON.stringify(reqBody),
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      setLoading(false);

      if (res.ok) {
        handleSetValues("firstName", "");
        setDisabled(!disabled);
        return;
      }
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  });

  return (
    <>
      <NavBar />
      <div className="settings">
        <h1 className="settings_title">
          User: {userProperties?.firstName + " " + userProperties?.lastName}
        </h1>
        <div className="settings_container">
          <FormProvider {...methods}>
            <form className="settings_form" onSubmit={onSubmit}>
              <UserPropery
                name="First Name: "
                keyName="firstName"
                value={userProperties?.firstName || ""}
                disable={disabled}
              />
              <UserPropery
                name="Last Name: "
                keyName="lastName"
                value={userProperties?.lastName || ""}
                disable={disabled}
              />
              <UserPropery
                name="Password : "
                keyName="password"
                disable={disabled}
                type={"password"}
              />
              {error ? <span className="error">&#9888; {error}</span> : null}
              <div className="user_btn_container">
                <div className="submitBtn" onClick={handleOnCLick}>
                  &nbsp; Edit <span className="setting_icon">&#9998;</span>
                </div>

                <SubmitBtn value={"Submit"} loading={loading} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
export default UserSettings;
