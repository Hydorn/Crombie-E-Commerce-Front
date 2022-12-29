import "./Styles/submitBtn.css";
type SubmitBtnProps = {
  value: string;
};
const SubmitBtn: React.FC<SubmitBtnProps> = ({ value }) => {
  return <input className="submitBtn" type="submit" value="submit" />;
};

export default SubmitBtn;
