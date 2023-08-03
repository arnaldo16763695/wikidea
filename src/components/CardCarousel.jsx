import { Link } from "react-router-dom";
import "./css-components/cardCarousel.css";

const CardCarousel = (props) => {
  const url= ""
  return (
    <Link to={`article/${props.articleId}`} className="card-carousel">
      <div className="description-card">
        <h5 className="title-card">{props.name}</h5>
      </div>
    </Link>
  );
};

export default CardCarousel;
