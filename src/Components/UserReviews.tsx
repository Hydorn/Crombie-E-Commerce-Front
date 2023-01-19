import url from "constant";
import { useTypedFetch } from "Hooks/useTypedFetch";
import React from "react";
import { FetchedRating } from "Utilities/types";
import DataSpinner from "./DataSpinner";
import Review from "./Review";

type UserReviewsProps = {
  id: string | undefined;
};
const UserReviews: React.FC<UserReviewsProps> = ({ id }) => {
  const { data: ratingsData, loading } = useTypedFetch<FetchedRating[]>({
    url,
    path: "/ratings?userID=" + id,
  });
  console.log(ratingsData);

  return (
    <>
      <DataSpinner
        loading={loading}
        empty={Boolean(!ratingsData?.length)}
        emptyText={"No reviews were made yet"}
        className={"review_container"}
      />
      {(ratingsData || []).map((el) => (
        <Review
          key={el.id}
          id={el.id}
          name={el.userName}
          identifier={el.userID}
          punctuation={el.punctuation}
          comments={el.comments}
          editModal={true}
        />
      ))}
    </>
  );
};
export default UserReviews;
