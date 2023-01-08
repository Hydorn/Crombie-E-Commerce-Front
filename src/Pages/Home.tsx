import NavBar from "Components/NavBar";
import Product from "Components/Product";
import { useProyectsContext } from "Context/proyectsContext";
import "./Styles/Home.css";

const Home = () => {
  const proyectsData = useProyectsContext();
  if (proyectsData)
    return (
      <div className="home_container">
        <NavBar />
        <div className="products">
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
    );
  else return null;
};

export default Home;
