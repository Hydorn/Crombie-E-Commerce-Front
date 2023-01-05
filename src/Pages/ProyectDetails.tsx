import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import ErrorPage from "./Error";
import "./Styles/ProyectDetails.css";
import url from "../constant";
import LoadingSpiner from "../Components/LoadingSpiner";

type FetchedData = {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

const ProyectDetails = () => {
  const [data, setData] = useState<FetchedData>();
  const { id } = useParams();
  useEffect(() => {
    try {
      fetch(url + "/proyects/" + id)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);
  if (!data) return <LoadingSpiner size={"big"} />;
  else
    return (
      <>
        <NavBar />
        <div className="proyect_details_container">
          <section className="proyect">
            <h1 className="proyect_title">{data.name}</h1>
            <p className="proyect_description">
              <span>Description: </span> {data.description}
            </p>
            <p className="proyect_email">
              <span>Conctact us: </span> {data.contactEmail}
            </p>
          </section>
          <div className="proyect_details_scores">
            <h2 className="score_title">Proyect Reviews:</h2>
          </div>
        </div>
      </>
    );
};
export default ProyectDetails;
