import Banner from "./Banner";
import "./css-components/home.css";
import { MyCarousel } from "./MyCarousel";
import SubNavBar from "./SubNavBar";

const Home = () => {
  
  return (
    <div className="home">

    <SubNavBar/>
    <Banner/>
    <MyCarousel />
    </div>
  );
};

export default Home;
