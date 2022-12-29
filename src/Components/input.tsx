import "./Styles/input.css";
type InputProps = {
  type: string;
  placeholder: string;
};
const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <label>
      <span className="label">{placeholder}</span>
      <input className="input" type={type} placeholder={placeholder} required />
    </label>
  );
};

export default Input;
