import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "Context/userContext";
import Navigate from "Navigate";
import ProyectProvider from "Context/proyectsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProyectProvider>
        <Navigate />
      </ProyectProvider>
    </UserProvider>
  </React.StrictMode>
);
