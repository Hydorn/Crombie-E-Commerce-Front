import { ReactNode, useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Product from "../Components/Product";
import url from "../constant";
import "./Styles/Home.css";
type FetchedData = {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};
type RenderData = (param: FetchedData[]) => ReactNode;
const Home = () => {
  const [data, setData] = useState<FetchedData[]>([]);
  useEffect(() => {
    try {
      fetch(url + "/proyects")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          console.log(data);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);

  const renderData: RenderData = (data) => {
    return (
      <>
        {data.map((el: FetchedData) => {
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
    );
  };

  return (
    <div className="home_container">
      <NavBar />
      <div className="products">{renderData(data)}</div>
    </div>
  );
};

export default Home;
