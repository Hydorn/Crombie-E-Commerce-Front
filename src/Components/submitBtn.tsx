import LoadingSpiner from "./LoadingSpiner";
import "./Styles/submitBtn.css";
type SubmitBtnProps = {
  value: string;
  loading: boolean;
};
const SubmitBtn: React.FC<SubmitBtnProps> = ({ value, loading }) => {
  return <>
  <input className="submitBtn" type="submit" value="submit" />
  {loading?(<LoadingSpiner/>):(null)}

  </>
};

export default SubmitBtn;
