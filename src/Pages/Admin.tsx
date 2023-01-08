import NavBar from "Components/NavBar";
import Product from "Components/Product";
import { useProyectsContext } from "Context/proyectsContext";

const Admin = () => {
  const proyectsData = useProyectsContext();

  return (
    <>
      <NavBar />
      <div className="profile_container">
        <h1 className="profile_title">Administration pannel</h1>
        <div className="user_scores">
          <h2 className="reviews_title">Proyects List:</h2>
          <>
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
          </>
        </div>
      </div>
    </>
  );
};
export default Admin;
