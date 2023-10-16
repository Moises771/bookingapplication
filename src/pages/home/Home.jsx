import "./home.css";
import Navbar from "../../components/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyLIst from "../../components/propertyList/PropertyLIst";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";

const Home = () => {
  return(
  <div>
    <Navbar />
    <Header />
    <div className="homeContainer">
       <Featured/>
       <h1 className="homeTitle">Browse by property type</h1>
       <PropertyLIst/>
       <h1>Home guests love</h1>
       <FeaturedProperties/>
       <MailList/>
    </div>
   
  </div>);
};

export default Home;
