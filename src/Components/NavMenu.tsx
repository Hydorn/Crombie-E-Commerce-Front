import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext";
import "./Styles/navMenu.css";
type NavMenuProps = {
  menu: boolean;
};
const NavMenu: React.FC<NavMenuProps> = ({ menu }) => {
  let navigate = useNavigate();
  const { handleSetValues, admin } = useUserContext();

  const handleLogOut = () => {
    handleSetValues("token", "");
    handleSetValues("logged", false);
    localStorage.removeItem("token");
    return navigate("/login");
  };
  return (
    <div className={`header_menu ${menu ? "" : "none"}`}>
      <div className="item">
        <p>User Settings</p>
      </div>
      {admin ? (
        <div className="item">
          <p>Administration</p>
        </div>
      ) : null}
      <div onClick={handleLogOut} className="item">
        <p>Log Out</p>
      </div>
    </div>
  );
};
export default NavMenu;
