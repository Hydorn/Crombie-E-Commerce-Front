import LoadingSpiner from "./LoadingSpiner";
import "./Styles/submitBtn.css";
type SubmitBtnProps = {
  value: string;
  loading: boolean;
};
const SubmitBtn: React.FC<SubmitBtnProps> = ({ value, loading }) => {
  return (
    <>
      <button className="submitBtn">
        {loading ? <LoadingSpiner /> : null}
        &nbsp;
        {value}
      </button>
    </>
  );
};

export default SubmitBtn;
