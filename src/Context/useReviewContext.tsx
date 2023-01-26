/* eslint-disable */
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
  dataFetch: (param: void) => {},
  loading: false,
};
const ReviewContext = React.createContext(initialState);

const ReviewProvider: React.FC<{
  children: React.ReactNode;
  id: string;
  fetchType: "proyect" | "user";
}> = ({ children, id, fetchType }) => {
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

  const dataFetch = async () => {
    setLoading(true);
    const res = await fetch(url + `/ratings?${fetchType}ID=` + id);
    const reviews = await res.json();
    setData(reviews);
    setLoading(false);
  };

  useEffect(() => {
    dataFetch();
  }, [id]);

  return (
    <ReviewContext.Provider value={{ data, dataFetch, loading }}>
      {children}
    </ReviewContext.Provider>
  );
};
export const useReviewContext = () => useContext(ReviewContext);
export default ReviewProvider;
