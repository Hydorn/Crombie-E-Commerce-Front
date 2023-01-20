import NavBar from "Components/NavBar";
import Product from "Components/Product";
import url from "constant";
import { useTypedFetch } from "Hooks/useTypedFetch";
import { Link } from "react-router-dom";
import { FetchedProyect } from "Utilities/types";
import "./Styles/Admin.css";

const Admin = () => {
  const { data: proyectsData } = useTypedFetch<FetchedProyect[]>({
    url,
    path: "/proyects",
  });

  return (
    <>
      <NavBar />
      <div className="admin_container">
        <h1 className="admin_title">Administration pannel</h1>
        <div className="proyects_list">
          <div className="title_container">
            <h2 className="proyects_title">Proyects List:</h2>
            <Link to={"/administration/new-proyect"}>
              <div className="add_proyect">
                Add new Proyect <span>&#10010;</span>
              </div>
            </Link>
          </div>
          <div className="admin_proyect_container">
            {proyectsData?.map((el) => {
              return (
                <Product
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  description={el.description}
                  contact={el.contactEmail}
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
