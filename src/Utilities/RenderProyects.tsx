import { useTypedFetch } from "../Hooks/useTypedFetch";
import { FetchedProyect } from "Utilities/types";
import { ReactNode } from "react";
import Product from "Components/Product";
import url from "constant";

type RenderProyects = (param: void) => ReactNode;

const RenderProyects: RenderProyects = () => {
  const proyectsPath = "/proyects";
  const { data: proyectsData } = useTypedFetch<FetchedProyect[]>({
    url,
    path: proyectsPath,
  });

  if (proyectsData)
    return (
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
    );
};

export default RenderProyects;
