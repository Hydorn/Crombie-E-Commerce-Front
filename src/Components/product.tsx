import url from "constant";
import { useUserContext } from "Context/userContext";
import { useTypedFetch } from "Hooks/useTypedFetch";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpiner from "./LoadingSpiner";
import "./Styles/product.css";
import Votes from "./Votes";
type ProductProps = {
  id: string;
  name: string;
  description: string;
  contact: string;
  loading?: boolean;
  handleDelete?: (e: React.MouseEvent<HTMLElement>) => void;
};
const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  contact,
  loading,
  handleDelete,
}) => {
  const { pathname } = useLocation();

  if (pathname === "/administration")
    return (
      <div className="product_container">
        <div className="product_img"></div>
        <div className="product_text">
          <h1 className="product_title">{name}</h1>
          <p>Description: {description}</p>
          <p>Contact: {contact}</p>
        </div>
        <div>
          <Votes id={id} />
          <div className="product_button icons_container">
            <div className="setting_icon review_setting_icon">
              <Link to={`proyects/${id}`}>
                <span>&#9998;</span>
              </Link>
            </div>
            <div
              onClick={handleDelete}
              className="setting_icon review_setting_icon"
              id={id}
            >
              {loading ? <LoadingSpiner /> : <span>&#128465;</span>}
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <Link to={`proyects/${id}`}>
        <div className="product_container">
          <div className="product_img"></div>
          <div className="product_text">
            <h1 className="product_title">{name}</h1>
            <p>Description: {description}</p>
            <p>Contact: {contact}</p>
          </div>
          <div>
            <Votes id={id} />
          </div>
        </div>
      </Link>
    );
};

export default Product;
/*
"Single page con HTML y CSS", "Aplicación mobile con React Native", "Servicio de devops con AWS", "Pagina web con Node y React"

*/
