import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext";
import "./Styles/navMenu.css";
type NavMenuProps = {
  menu: boolean;
  onClickLogOut?: () => void;
};
const NavMenu: React.FC<NavMenuProps> = ({ menu, onClickLogOut }) => {
  const { handleSetValues, admin } = useUserContext();

  return (
    <div className={`header_menu ${menu ? "" : "none"}`}>
      <div className="item">
        <p>User Settings</p>
      </div>
      {admin ? (
        <div className="item">
          <Link to="/administration">
            <p>Administration</p>
          </Link>
        </div>
      ) : null}
      <div onClick={onClickLogOut} className="item">
        <p>Log Out</p>
      </div>
    </div>
  );
};
export default NavMenu;
