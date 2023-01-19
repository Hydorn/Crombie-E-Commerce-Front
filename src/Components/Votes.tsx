import url from "constant";
import { useTypedFetch } from "Hooks/useTypedFetch";
import { FetchedAvg } from "Utilities/types";
type VotesProps = {
  id: string;
  size?: string;
};
const Votes: React.FC<VotesProps> = ({ id, size }) => {
  const { data: rating } = useTypedFetch<FetchedAvg>({
    url,
    path: "/ratings/" + id,
  });

  const ratingRound = Math.round(rating?.average || 0);

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < ratingRound) stars.push(<span key={i}>&#9733;</span>);
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
      <span className="stars">{renderStars()} </span>
      <span>({rating?.votes || 0} votes) </span>
    </div>
  );
};
export default Votes;
