import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import "./Styles/input.css";

type InputProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<InputProps> = ({ placeholder, name, ...props }) => {
  const { register } = useFormContext();
  return (
    <label className="input_text">
      <input className="input" placeholder=" " {...props} {...register(name)} />
      <span className="label">{placeholder}</span>
      <span className="input_error">&#9888; This field is required</span>
    </label>
  );
};

export default Input;
