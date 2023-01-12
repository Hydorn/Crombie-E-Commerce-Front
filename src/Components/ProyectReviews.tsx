import url from "constant";
import { useUserContext } from "Context/userContext";
import { useTypedFetch } from "Hooks/useTypedFetch";
import React, { useEffect, useState } from "react";
import { FetchedRating } from "Utilities/types";
import DataSpinner from "./DataSpinner";
import NoReview from "./NoReview";
import Review from "./Review";

type ProyectReviewsProps = {
  id: string | undefined;
};
const ProyectReviews: React.FC<ProyectReviewsProps> = ({ id }) => {
  const { id: userID } = useUserContext();

  const { data: ratingsData, loading } = useTypedFetch<FetchedRating[]>({
    url,
    path: "/ratings?proyectID=" + id,
  });

  const [myReview, setMyReview] = useState<FetchedRating | undefined>();

  useEffect(() => {
    const review = ratingsData?.find((el) => el.userID === userID);
    setMyReview(review);
  }, [ratingsData, userID]);
  // myReview={userID == el.userID ? "me_review" : ""}

  return (
    <>
      <DataSpinner
        loading={loading}
        empty={Boolean(!ratingsData?.length)}
        emptyText={"No reviews were made yet"}
        className={"review_container"}
      />
      {myReview ? (
        <Review
          key={myReview.id}
          id={myReview.id}
          name={myReview.userName}
          identifier={myReview.userID}
          punctuation={myReview.punctuation}
          comments={myReview.comments}
          myReview={"me_review"}
        />
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
