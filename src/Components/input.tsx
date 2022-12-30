import { InputHTMLAttributes } from "react";
import "./Styles/input.css";
type InputProps = {
} & InputHTMLAttributes<HTMLInputElement> ;
const Input: React.FC<InputProps> = ({ placeholder, ...props }) => {
  return (
    <label className="input_text">
      <span className="label">{placeholder}</span>
      <input className="input" {...props} />
    </label>
  );
};

export default Input;
