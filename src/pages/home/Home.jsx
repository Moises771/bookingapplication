import "./home.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyLIst from "../../components/propertyList/PropertyLIst";

const Home = () => {
  return(
  <div>
    <Navbar />
    <Header />
    <div className="homeContainer">
       <Featured/>
       <h1 className="homeTitle">Browse by property type</h1>
       <PropertyLIst/>
    </div>
   
  </div>);
};

export default Home;
