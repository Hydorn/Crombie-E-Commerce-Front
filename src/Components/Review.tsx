import Stars from "./Stars";
import "./Styles/review.css";
import { FetchedRating, FetchedUser } from "Utilities/types";
const user = {} as FetchedUser;
type ReviewProps = {
  id: string;
  userName?: string;
  userID?: string;
  proyectName?: string;
  proyectID?: string;
  punctuation?: number;
  comments?: string | null;
};
const Review: React.FC<ReviewProps> = ({
  id,
  userName,
  userID,
  proyectName,
  proyectID,
  punctuation,
  comments,
}) => {
  if (userID && proyectID && punctuation)
    return (
      <div className="review_container">
        <div className="review_header">
          <h1>
            {userName ? userName : proyectName} &nbsp;{" - "}&nbsp;
            <span className="review_indentifier">
              {userID ? userID.slice(-6) : proyectID.slice(-6)}
            </span>
          </h1>

          <Stars starCount={punctuation} size="big_star" />
        </div>
        {comments ? (
          <p className="review_content">
            <span className="review_subtitle">Comments: </span>
            {comments}
          </p>
        ) : null}
      </div>
    );
  else return null;
};
export default Review;
