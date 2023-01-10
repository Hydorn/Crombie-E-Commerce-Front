import "./Styles/userProperty.css";
type UserProperyProps = {
  name: string;
  value: string;
};
const UserPropery: React.FC<UserProperyProps> = ({ name, value }) => {
  return (
    <div className="user_property">
      <h1>{name}</h1>
      <span className="property_value">{value}</span>
      <div className="setting_icon">
        <span>&#9998;</span>
      </div>
    </div>
  );
};
export default UserPropery;
