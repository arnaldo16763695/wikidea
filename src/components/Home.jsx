import Banner from "./Banner";
import "./css-components/home.css";
import { MyCarousel } from "./MyCarousel";

const Home = () => {
  
  return (
    <div className="home">
    <Banner/>
    <MyCarousel />
    </div>
  );
};

export default Home;
