import { Link } from "react-router-dom";
import { useUserContext } from "../Context/userContext";
import "./Styles/navMenu.css";
type NavMenuProps = {
  menu: boolean;
  onClickLogOut?: () => void;
};
const NavMenu: React.FC<NavMenuProps> = ({ menu, onClickLogOut }) => {
  const { admin } = useUserContext();

  return (
    <div className={`header_menu ${menu ? "" : "none"}`}>
      <Link to={"/profile"}>
        <div className="item">
          <p>Profile</p>
        </div>
      </Link>
      <Link to={"/settings"}>
        <div className="item">
          <p>User Settings</p>
        </div>
      </Link>
      {admin ? (
        <Link to="/administration">
          <div className="item">
            <p>Administration</p>
          </div>
        </Link>
      ) : null}
      <div onClick={onClickLogOut} className="item">
        <p>Log Out</p>
      </div>
    </div>
  );
};
export default NavMenu;
