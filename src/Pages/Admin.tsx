import NavBar from "Components/NavBar";
import Product from "Components/Product";
import url from "constant";
import { FetchedProyect } from "Utilities/types";
import { Link } from "react-router-dom";
import "./Styles/Admin.css";
import { useEffect, useState } from "react";
import { useUserContext } from "Context/userContext";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useUserContext();
  const [proyectsData, setProyectsData] = useState<FetchedProyect[]>([]);

  const proyectsFetch = () => {
    fetch(url + "/proyects")
      .then((res) => res.json())
      .then((data: FetchedProyect[]) => {
        setProyectsData(data);
      });
  };
  useEffect(() => {
    proyectsFetch();
  }, []);

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    try {
      setLoading(true);
      fetch(url + "/proyects/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        res.json();
        if (res.ok) proyectsFetch();
      });
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
    }
  };
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
                  handleDelete={handleDelete}
                  loading={loading}
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
