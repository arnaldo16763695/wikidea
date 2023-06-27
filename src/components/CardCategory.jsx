import React from "react";
import "./css-components/cardCategory.css";
const CardCategory = (props) => {
  return (
    <div className="card">
      
      <img className="product--image" src={props.url} alt="product image" />
      <h2>{props.name}</h2>
      
      <p>{props.description}</p>
     
    </div>
  );
};

export default CardCategory;
