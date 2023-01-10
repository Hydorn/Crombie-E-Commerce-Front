import NavBar from "Components/NavBar";
import UserPropery from "Components/UserProperty";
import { useUserContext } from "Context/userContext";
import "./Styles/UserSettings.css";

const UserSettings = () => {
  const { firstName, lastName } = useUserContext();
  return (
    <>
      <NavBar />
      <div className="settings">
        <h1 className="settings_title">User: {firstName + " " + lastName}</h1>
        <div className="settings_container">
          <UserPropery name="First Name: " value={firstName} />
          <UserPropery name="Last Name: " value={lastName} />
        </div>
      </div>
    </>
  );
};
export default UserSettings;
