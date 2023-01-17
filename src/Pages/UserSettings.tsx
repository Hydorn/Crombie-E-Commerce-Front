import NavBar from "Components/NavBar";
import SubmitBtn from "Components/SubmitBtn";
import UserPropery from "Components/UserProperty";
import { useUserContext } from "Context/userContext";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./Styles/UserSettings.css";

const UserSettings = () => {
  const [disabled, setDisabled] = useState(true);
  const { firstName, lastName } = useUserContext();
  const methods = useForm();
  const handleOnCLick = () => {
    setDisabled(!disabled);
  };

  const onSubmit = methods.handleSubmit((data) => console.log(data));

  return (
    <>
      <NavBar />
      <div className="settings">
        <h1 className="settings_title">User: {firstName + " " + lastName}</h1>
        <div className="settings_container">
          <FormProvider {...methods}>
            <form className="settings_form" onSubmit={onSubmit}>
              <UserPropery
                name="First Name: "
                keyName="firstName"
                value={firstName}
                disable={disabled}
              />
              <UserPropery
                name="Last Name: "
                keyName="lastName"
                value={lastName}
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
