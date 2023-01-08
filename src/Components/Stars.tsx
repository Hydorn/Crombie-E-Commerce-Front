import "./Styles/stars.css";
type StarsProps = {
  starCount: number;
  size: string;
};
const Stars: React.FC<StarsProps> = ({ starCount, size }) => {
  const renderStars = () => {
    const stars = [];
    if (starCount > 5) starCount = 5;
    for (let i = 0; i < starCount; i++) {
      stars.push(<>&#9733;</>);
    }
    return stars;
  };
  //fetch

  return (
    <div className={"score " + size}>
      <span className="stars">{renderStars()} </span>
    </div>
  );
};
export default Stars;
