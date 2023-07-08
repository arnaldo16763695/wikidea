
import { Link } from "react-router-dom";
import "./css-components/cardCategory.css";  
const CardCategory = (props) => {
  return (
    <div className="card">
      
      <Link to={`articles-by-category/${props.categoryId}`}><img className="category--image" src={props.url} alt="product image" />
      <h5 className="title-card">{props.name}</h5></Link>
      
      {/* <p>{props.description}</p> */}
     
    </div>
  );
};

export default CardCategory;
