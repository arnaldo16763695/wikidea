import React from "react";
import { Link } from "react-router-dom";
import "./root.css";

const root = () => {
  return (
    <div className="root">
    <h1>Wikidea</h1>

      <div className="item">
         <img src="https://placeimg.com/320/240/tech" alt="imagen" />
      </div>

      
        <input className="input" type="text" width="300px" />
      

      <div className="buttons">
      
        <Link to={'add-theme'} className="button">Inicio</Link>
        <Link to={'add-theme'} className="button">Agregar</Link>
        
      </div>
    </div>
  );
};

export default root;
