import "./Styles/loadingSpiner.css";
type LoadingSpinerProps = {
  size?: string;
};
const LoadingSpiner: React.FC<LoadingSpinerProps> = ({ size }) => {
  return <div className={"loading_spiner " + size}></div>;
};
export default LoadingSpiner;
