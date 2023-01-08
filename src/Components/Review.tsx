import Stars from "./Stars";
import "./Styles/review.css";

type ReviewProps = {
  id: string;
  name: string;
  identifier: string;
  punctuation: number;
  comments: string | null | undefined;
  myReview?: string;
};
const Review: React.FC<ReviewProps> = ({
  id,
  name,
  identifier,
  punctuation,
  comments,
  myReview,
}) => {
  return (
    <div className={"review_container " + myReview}>
      <div className="review_header">
        <h1>
          {name} &nbsp;{" - "}&nbsp;
          <span className="review_indentifier">{identifier.slice(-6)}</span>
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
};
export default Review;
