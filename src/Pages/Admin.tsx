import { useEffect, useState } from "react";
import Product from "Components/Product";
import url from "constant";

type FetchedData = {
  id: string;
  name: string;
  description: string;
  contactEmail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
};

const Admin = () => {
  const [data, setData] = useState<FetchedData[]>([]);
  useEffect(() => {
    try {
      fetch(url + "/proyects")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    } catch (err: any) {
      console.log(err.message);
    }
  }, []);
  return (
    <>
      {data.map((el: FetchedData) => {
        return (
          <Product
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
export default Admin;
