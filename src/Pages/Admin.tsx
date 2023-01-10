import NavBar from "Components/NavBar";
import Product from "Components/Product";
import "./Styles/Admin.css";
import { useProyectsContext } from "Context/proyectsContext";

const Admin = () => {
  const proyectsData = useProyectsContext();

  return (
    <>
      <NavBar />
      <div className="admin_container">
        <h1 className="admin_title">Administration pannel</h1>
        <div className="proyects_list">
          <h2 className="proyects_title">Proyects List:</h2>
          <div className="admin_proyect_container">
            {proyectsData.map((el) => {
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
