import { useUserContext } from "Context/userContext";
import { useReviewContext } from "Context/useReviewContext";
import React, { useEffect, useState } from "react";
import { FetchedRating } from "Utilities/types";
import DataSpinner from "./DataSpinner";
import NewReviewModal from "./NewReviewModal";
import Review from "./Review";

type ProyectReviewsProps = {
  id: string | undefined;
};
const ProyectReviews: React.FC<ProyectReviewsProps> = ({ id }) => {
  const [myReview, setMyReview] = useState<FetchedRating | undefined>();
  const { data: ratingsData, loading } = useReviewContext();
  const [modal, setModal] = useState(false);
  const { id: userID, logged } = useUserContext();

  console.log(ratingsData);

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const review = ratingsData?.find((el) => el.userID === userID);
    setMyReview(review);
  }, [ratingsData, userID]);

  return (
    <>
      <DataSpinner
        loading={loading}
        empty={Boolean(!ratingsData?.length)}
        emptyText={"No reviews were made yet"}
        className={"review_container"}
      />
      {modal && <NewReviewModal handleModal={setModal} modal={modal} />}
      {myReview ? (
        <Review
          key={myReview.id}
          id={myReview.id}
          name={myReview.userName}
          identifier={myReview.userID}
          punctuation={myReview.punctuation}
          comments={myReview.comments}
          myReview={"me_review"}
          editModal={true}
        />
      ) : logged ? (
        <div className="add_review" onClick={handleModal}>
          Add review <span>&#10010;</span>
        </div>
      ) : null}
      {(ratingsData || [])
        .filter((el) => el.userID !== userID)
        .map((el) => (
          <Review
            key={el.id}
            id={el.id}
            name={el.userName}
            identifier={el.userID}
            punctuation={el.punctuation}
            comments={el.comments}
          />
        ))}
    </>
  );
};
export default ProyectReviews;
