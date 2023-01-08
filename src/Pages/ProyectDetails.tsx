import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./Styles/ProyectDetails.css";
import url from "../constant";
import LoadingSpiner from "../Components/LoadingSpiner";

import { useTypedFetch } from "Hooks/useTypedFetch";
import RenderProyectReviews from "Utilities/RenderProyectReviews";

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
  const { id } = useParams();
  const proyectPath = "/proyects/" + id;
  const { data: proyectData, loading } = useTypedFetch<FetchedData>({
    url,
    path: proyectPath,
  });

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
          </div>
        </div>
      </>
    );
};
export default ProyectDetails;
