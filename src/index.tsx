import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "Context/userContext";
import Navigate from "Navigate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <Navigate />
    </UserProvider>
  </React.StrictMode>
);
