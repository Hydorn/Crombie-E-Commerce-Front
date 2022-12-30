import NavBar from "../Components/NavBar";
import Product from "../Components/Product";
import "./Styles/Home.css"
const Home = () => {
  return (
    <div className="home_container">
      <NavBar />
      <div className="products">
      <Product />
      <Product />
      <Product />
      <Product />
      </div>

    </div>

  );
};

export default Home;
