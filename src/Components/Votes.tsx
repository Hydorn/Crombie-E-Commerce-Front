import { useState } from "react";
type VotesProps = {
  id: string;
};
const Votes: React.FC<VotesProps> = ({ id }) => {
  const [rating, setRating] = useState(4.7);
  const ratingRound = Math.round(rating);
  const proyectId = 222;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < ratingRound; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };
  //fetch

  return (
    <div className="score">
      <span className="stars">{renderStars()} </span>
    </div>
  );
};
export default Votes;
