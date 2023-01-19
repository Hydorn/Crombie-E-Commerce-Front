import "./Styles/stars.css";
type StarsProps = {
  starCount: number;
  size: string;
};
const Stars: React.FC<StarsProps> = ({ starCount, size }) => {
  const renderStars = () => {
    const stars = [];
    if (starCount > 5) starCount = 5;
    for (let i = 0; i < 5; i++) {
      if (i < starCount) stars.push(<span key={i}>&#9733;</span>);
      else
        stars.push(
          <span key={i} className="not_bright">
            &#9733;
          </span>
        );
    }
    return stars;
  };
  //fetch

  return (
    <div className={"score " + size}>
      <span className="stars">
        {renderStars()} &nbsp; ({starCount}/5)
      </span>
    </div>
  );
};
export default Stars;
