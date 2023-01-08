import url from "constant";
import { useUserContext } from "Context/userContext";
import { useTypedFetch } from "Hooks/useTypedFetch";
import React from "react";
import { FetchedRating } from "Utilities/types";
import NoReview from "./NoReview";
import Review from "./Review";

type ProyectReviewsProps = {
  id: string | undefined;
};
const ProyectReviews: React.FC<ProyectReviewsProps> = ({ id }) => {
  const { id: userID } = useUserContext();

  const ratingsPath = "/ratings?proyectID=" + id;
  const { data: ratingsData } = useTypedFetch<FetchedRating[]>({
    url,
    path: ratingsPath,
  });

  const myReview = ratingsData?.find((el) => el.userID === userID);
  // myReview={userID == el.userID ? "me_review" : ""}

  if (!ratingsData) {
    return <NoReview />;
  } else {
    return (
      <>
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
        {ratingsData.map((el) => {
          if (userID !== el.userID) {
            return (
              <Review
                key={el.id}
                id={el.id}
                name={el.userName}
                identifier={el.userID}
                punctuation={el.punctuation}
                comments={el.comments}
              />
            );
          } else return null;
        })}
      </>
    );
  }
};
export default ProyectReviews;
