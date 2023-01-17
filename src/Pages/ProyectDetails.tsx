import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./Styles/ProyectDetails.css";
import LoadingSpiner from "../Components/LoadingSpiner";
import ProyectReviews from "Components/ProyectReviews";
import { useEffect, useState } from "react";
import { FetchedProyect } from "Utilities/types";
import url from "constant";

const ProyectDetails = () => {
  const { id } = useParams();
  const [proyectData, setProyectData] = useState<FetchedProyect>();

  useEffect(() => {
    fetch(url + "/proyects/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProyectData(data);
      });
  }, [id]);
  if (!proyectData) return <LoadingSpiner size={"big"} />;
  else
    return (
      <>
        <NavBar />
        <div className="proyect_details_container">
          <section className="proyect">
            <h1 className="proyect_title">{proyectData.name}</h1>
            <p className="proyect_description">
              <span>Description: </span> {proyectData.description}
            </p>
            <p className="proyect_email">
              <span>Conctact us: </span> {proyectData.contactEmail}
            </p>
          </section>
          <div className="proyect_details_scores">
            <h2 className="score_title">Proyect Reviews:</h2>
            <ProyectReviews id={id} />
          </div>
        </div>
      </>
    );
};
export default ProyectDetails;
