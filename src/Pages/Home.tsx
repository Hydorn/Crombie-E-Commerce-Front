import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Product from "../Components/Product";
import url from "../constant";
import "./Styles/Home.css"
type Error = {
  message: string;
  ok: boolean;
  macana: number;
}
const Home = () => {
  useEffect(()=>{
    try{
      fetch(url + "/proyects").then(res => res.json()).then(data => console.log(data));

    }catch(err:any){
      console.log(err.message);
      
    }

  },[])
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
