import NavBar from "../Components/navBar";
import Product from "../Components/product";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="products"></div>
      <Product />
    </>
  );
};

export default Home;
