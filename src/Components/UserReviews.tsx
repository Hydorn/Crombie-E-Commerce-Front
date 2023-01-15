import url from "constant";
import { useTypedFetch } from "Hooks/useTypedFetch";
import React from "react";
import { FetchedRating } from "Utilities/types";
import NoReview from "./NoReview";
import Review from "./Review";

type UserReviewsProps = {
  id: string | undefined;
};
const UserReviews: React.FC<UserReviewsProps> = ({ id }) => {
  const ratingsPath = "/ratings?userID=" + id;

  const { data: ratingsData } = useTypedFetch<FetchedRating[]>({
    url,
    path: ratingsPath,
  });

  if (!ratingsData) {
    return <NoReview />;
  } else {
    return (
      <>
        {ratingsData.map((el) => {
          return (
            <Review
              key={el.id}
              id={el.id}
              name={el.proyectName}
              identifier={el.proyectID}
              punctuation={el.punctuation}
              comments={el.comments}
              editModal={true}
            />
          );
        })}
      </>
    );
  }
};
export default UserReviews;
