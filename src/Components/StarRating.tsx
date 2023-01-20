import "./Styles/starRating.css";
import { useState } from "react";

type StarRatingProps = {
  rating: number;
  handleSetRating: (param: number) => void;
};
const StarRating: React.FC<StarRatingProps> = ({ rating, handleSetRating }) => {
  const [hover, setHover] = useState(0);

  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="star_rating">
      {stars.map((el) => {
        return (
          <button
            type="button"
            key={el}
            className={el <= (hover || rating) ? "bright" : "not_bright"}
            onMouseEnter={() => setHover(el)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => handleSetRating(el)}
          >
            <span>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
