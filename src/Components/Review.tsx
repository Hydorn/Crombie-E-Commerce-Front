import url from "constant";
import { useUserContext } from "Context/userContext";
import { useState } from "react";
import LoadingSpiner from "./LoadingSpiner";
import ReviewModal from "./ReviewModal";
import Stars from "./Stars";
import "./Styles/review.css";

type ReviewProps = {
  id: string;
  name: string;
  identifier: string;
  punctuation: number;
  comments: string | null | undefined;
  myReview?: string;
  editModal?: boolean | undefined;
};
const Review: React.FC<ReviewProps> = ({
  id,
  name,
  identifier,
  punctuation,
  comments,
  myReview,
  editModal,
}) => {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const [loading, setLoading] = useState(false);
  const { token } = useUserContext();
  const handleOnClick = async () => {
    try {
      setLoading(true);
      const res = await fetch(url + "/ratings/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setLoading(false);
    } catch (error: any) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      {modal && <ReviewModal handleModal={setModal} modal={modal} id={id} />}
      <div className={"review_container " + myReview}>
        <div className="review_header">
          <h1>
            {name} &nbsp;{" - "}&nbsp;
            <span className="review_indentifier">{identifier.slice(-6)}</span>
          </h1>

          <Stars starCount={punctuation} size="big_star" />
        </div>
        <div className="review_optional">
          <p className="review_content">
            <span className="review_subtitle">Comments: </span>
            {comments ? (
              <span>{comments}</span>
            ) : (
              <span className="no_comments">
                No comments were made for this proyect
              </span>
            )}
          </p>

          {editModal ? (
            <div className="icons_container">
              <div
                className="setting_icon review_setting_icon"
                onClick={editModal ? handleModal : undefined}
              >
                <span>&#9998;</span>
              </div>
              <div
                className="setting_icon review_setting_icon"
                onClick={handleOnClick}
              >
                {loading ? <LoadingSpiner /> : <span>&#128465;</span>}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Review;
