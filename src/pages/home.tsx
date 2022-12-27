import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>This is the home </h1>
      <Link to={"login"}>LOGIN</Link>
    </>
  );
};

export default Home;
