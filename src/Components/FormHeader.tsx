import { AiFillLock } from "react-icons/ai";
import "./Styles/formHeader.css";
type FormHeaderProps = {
  title: string;
};
const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <>
      <div className="icon_container">
        <AiFillLock className="icon" />
      </div>
      <h2 className="title">{title}</h2>
    </>
  );
};
export default FormHeader;
