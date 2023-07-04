import SearchMain from "./SearchMain";
import "./css-components/banner.css";

const Banner = () => {
  return (
    <div className="container_banner">
      <div className="title_banner">
        <p>Colabry</p>
      </div>
      <div className="subtitle_banner">
        <p>TU ENCICLOPEDIA COLABORATIVA</p>
        <p>Crea y edita artículos sobre infinidades de temas. </p>
        
      </div>
      <SearchMain/>
      
    </div>
  );
};

export default Banner;
