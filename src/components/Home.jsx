import Banner from "./Banner";
import "./css-components/home.css";


import Search from "./Search";
import SearchMain from "./SearchMain";

const Home = () => {
  
  return (
    <div className="home"> 
    <Banner/>
    <Search/> 
    <SearchMain/>
    
    
    
    </div>
  );
};

export default Home;
