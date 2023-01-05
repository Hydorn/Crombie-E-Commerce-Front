import { useState } from "react";

const Votes = () => {
  const [rating, setRating] = useState(4.7);
  const ratingRound = Math.round(rating);
  const proyectId = 222;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < ratingRound; i++) {
      stars.push(<>&#9733;</>);
    }
    return stars;
  };
  //fetch

  return (
    <div className="score">
      <span className="stars">{renderStars()} </span>
      <span>(1598)</span>
    </div>
  );
};
export default Votes;
