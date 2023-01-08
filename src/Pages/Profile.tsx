import NavBar from "Components/NavBar";
import UserReviews from "Components/UserReviews";
import { useUserContext } from "Context/userContext";
import "./Styles/Profile.css";

const Profile = () => {
  const { id, firstName, lastName } = useUserContext();

  return (
    <>
      <NavBar />
      <div className="profile_container">
        <h1 className="profile_title">Welcome, {`${firstName} ${lastName}`}</h1>
        <div className="user_scores">
          <h2 className="reviews_title">Your proyect Reviews:</h2>
          <UserReviews id={id} />
        </div>
      </div>
    </>
  );
};
export default Profile;
