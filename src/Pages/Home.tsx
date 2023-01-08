import NavBar from "Components/NavBar";
import renderProyects from "Utilities/RenderProyects";
import "./Styles/Home.css";

const Home = () => {
  return (
    <div className="home_container">
      <NavBar />
      <div className="products">{renderProyects()}</div>
    </div>
  );
};

export default Home;
