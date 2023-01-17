import NavBar from "Components/NavBar";
import Product from "Components/Product";
import url from "constant";
import { useEffect, useState } from "react";
import { FetchedProyect } from "Utilities/types";
import "./Styles/Admin.css";

const Admin = () => {
  const [proyectsData, setProyectData] = useState<FetchedProyect[]>();

  useEffect(() => {
    fetch(url + "/proyects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProyectData(data);
      });
  }, []);
  return (
    <>
      <NavBar />
      <div className="admin_container">
        <h1 className="admin_title">Administration pannel</h1>
        <div className="proyects_list">
          <h2 className="proyects_title">Proyects List:</h2>
          <div className="admin_proyect_container">
            {proyectsData?.map((el) => {
              return (
                <Product
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  description={el.description}
                  contact={el.contactEmail}
                  score={0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
