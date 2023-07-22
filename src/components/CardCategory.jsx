import { Link } from "react-router-dom";
import "./css-components/cardCategory.css";
const CardCategory = (props) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
      }}
    >
     <div className="cover-card-category">
       <h5 className="title-card-category"><Link to={`articles-by-category/${props.categoryId}`}>{props.name}</Link></h5>
     </div>

      
    </div>
  );
};

export default CardCategory;
