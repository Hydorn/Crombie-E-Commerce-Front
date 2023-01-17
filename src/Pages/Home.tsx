import NavBar from "Components/NavBar";
import Product from "Components/Product";
import url from "constant";
import { useEffect, useState } from "react";
import { FetchedProyect } from "Utilities/types";
import "./Styles/Home.css";

const Home = () => {
  const [proyectsData, setProyectData] = useState<FetchedProyect[]>();

  useEffect(() => {
    fetch(url + "/proyects")
      .then((res) => res.json())
      .then((data) => {
        setProyectData(data);
      });
  }, []);

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
