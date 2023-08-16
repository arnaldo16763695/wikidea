import { Link } from "react-router-dom";
import "./css-components/cardCarousel.css";

const CardCarousel = (props) => {
  
  return (
    <Link to={`article/${props.articleId}`} className="card-carousel">
      <img src='/images/articles.png' alt="articles" className="img-category" />
      <div className="description-card">
      
        <h5 className="title-card">{props.name}</h5>
      </div>
    </Link>
  );
};

export default CardCarousel;
