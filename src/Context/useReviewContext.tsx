import url from "constant";
import React, { useContext, useEffect, useState } from "react";
import { FetchedRating } from "Utilities/types";

const initialState = {
  data: [
    {
      id: "",
      userName: "",
      userID: "",
      proyectName: "",
      proyectID: "",
      punctuation: 0,
      comments: "",
    } as FetchedRating,
  ],
  handleSetData: (param: FetchedRating) => {},
  loading: false,
};
const ReviewContext = React.createContext(initialState);

const ReviewProvider: React.FC<{ children: React.ReactNode; id: string }> = ({
  children,
  id,
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<FetchedRating[]>([
    {
      id: "",
      userName: "",
      userID: "",
      proyectName: "",
      proyectID: "",
      punctuation: 0,
      comments: "",
    },
  ]);

  const handleSetData = (param: FetchedRating) => {
    setData((prev) => [...prev, param]);
  };

  useEffect(() => {
    setLoading(true);
    fetch(url + "/ratings?proyectID=" + id)
      .then((res) => res.json())
      .then((reviews) => {
        setData(reviews);
        setLoading(false);
      });
  }, [id]);

  return (
    <ReviewContext.Provider value={{ data, handleSetData, loading }}>
      {children}
    </ReviewContext.Provider>
  );
};
export const useReviewContext = () => useContext(ReviewContext);
export default ReviewProvider;
