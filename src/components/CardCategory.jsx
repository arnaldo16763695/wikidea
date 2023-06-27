
import { Link } from "react-router-dom";
import "./css-components/cardCategory.css";
const CardCategory = (props) => {
  return (
    <div className="card">
      
      <Link to={''}><img className="product--image" src={props.url} alt="product image" />
      <h3 className="title-card">{props.name}</h3></Link>
      
      {/* <p>{props.description}</p> */}
     
    </div>
  );
};

export default CardCategory;
