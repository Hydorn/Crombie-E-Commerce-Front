import Review from "../Components/Review";
import { FetchedRating } from "Utilities/types";
import { useTypedFetch } from "../Hooks/useTypedFetch";
import url from "constant";
import NoReview from "Components/NoReview";
import { ReactNode } from "react";

type renderProyectReviews = (id: string | undefined) => ReactNode;

const RenderProyectReviews: renderProyectReviews = (id) => {
  const ratingPath = "/ratings?idProyect=" + id;

  console.log("hola");

  const { data: ratingsData } = useTypedFetch<FetchedRating[]>({
    url,
    path: ratingPath,
  });

  if (!ratingsData) {
    return <NoReview />;
  } else {
    return ratingsData.map((el: FetchedRating) => {
      return (
        <Review
          id={el.id}
          proyectID={el.proyectID}
          proyectName={el.proyectName}
          punctuation={el.punctuation}
          comments={el.comments}
        />
      );
    });
  }
};

export default RenderProyectReviews;
