import "./css-components/home.css";
import Search from "../components/Search";
import { Carousel } from "./Carousel";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      {/* <ImagesSlider /> */}
    </div>
  );
};

export default Home;
