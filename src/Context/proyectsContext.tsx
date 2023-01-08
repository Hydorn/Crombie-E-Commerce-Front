import url from "constant";
import { useTypedFetch } from "Hooks/useTypedFetch";

import React, { useContext, useEffect, useState } from "react";
import { FetchedProyect } from "Utilities/types";
const ProyectContext = React.createContext<FetchedProyect[]>([
  {
    id: "",
    name: "",
    description: "",
    contactEmail: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
]);

const ProyectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [proyectsData, setProyectsData] = useState<FetchedProyect[]>([
    {
      id: "",
      name: "",
      description: "",
      contactEmail: "",
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    },
  ]);

  useEffect(() => {
    const proyectsPath = "/proyects";
    fetch(url + proyectsPath)
      .then((res) => res.json())
      .then((data) => setProyectsData(data));
  }, []);

  return (
    <ProyectContext.Provider value={proyectsData}>
      {children}
    </ProyectContext.Provider>
  );
};
export const useProyectsContext = () => useContext(ProyectContext);
export default ProyectProvider;
