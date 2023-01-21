import { useFormContext } from "react-hook-form";
import "./Styles/userProperty.css";
type UserProperyProps = {
  name: string;
  value?: string;
  disable?: boolean;
  keyName: string;
  type?: string;
};
const UserPropery: React.FC<UserProperyProps> = ({
  name,
  value,
  disable,
  keyName,
  type,
}) => {
  const { register } = useFormContext();
  return (
    <div className="user_property">
      <h1>{name}</h1>
      <span className="property_value">
        <input
          {...register(keyName, { required: "Required" })}
          className="user_input"
          type={type || "text"}
          defaultValue={String(value) || ""}
          disabled={disable}
        />
      </span>
    </div>
  );
};
export default UserPropery;
