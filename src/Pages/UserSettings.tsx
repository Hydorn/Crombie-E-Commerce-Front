import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import { useUserContext } from "Context/userContext";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FetchedUser } from "Utilities/types";
import "./Styles/UserSettings.css";

const UserSettings = () => {
  const [disabled, setDisabled] = useState(true);
  const { token } = useUserContext();
  const [userProperties, setUserProperties] = useState<FetchedUser>();
  useEffect(() => {
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
  }, [token]);
  const methods = useForm();
  const handleOnCLick = () => {
    setDisabled(!disabled);
  };

  console.log(userProperties);

  const onSubmit = methods.handleSubmit((data) => {});

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
              <div className="user_btn_container">
                <div className="submitBtn" onClick={handleOnCLick}>
                  &nbsp; Edit <span className="setting_icon">&#9998;</span>
                </div>
                <SubmitBtn value={"Submit"} loading={false} />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
};
export default UserSettings;
