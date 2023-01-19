import { Link } from "react-router-dom";
import "./Styles/product.css";
import Votes from "./Votes";
type ProductProps = {
  id: string;
  name: string;
  description: string;
  contact: string;
  score: number;
};
const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  contact,
  score,
}) => {
  return (
    <Link to={`proyects/${id}`}>
      <div className="product_container">
        <div className="product_img"></div>
        <div className="product_text">
          <h1 className="product_title">{name}</h1>
          <p>Description: {description}</p>
          <p>Contact: {contact}</p>
        </div>
        <Votes id={id} />
      </div>
    </Link>
  );
};

export default Product;
/*
"Single page con HTML y CSS", "Aplicación mobile con React Native", "Servicio de devops con AWS", "Pagina web con Node y React"

*/
