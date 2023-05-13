import { useState } from "react";
import "./css-components/navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navBar">
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="nav_logo"><img src="../../public/images/icon.png" alt="icono colabry" className="icon" /></div>
      <Link className="link-add-content" to="/add-article">Crear Contenido</Link>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link onClick={() => setIsOpen(!isOpen)} to="/">Inicio</Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/add-article">Crear artículo</Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-categories"> Categorías</Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-articles"> Articulos</Link>
      </div>
    </header>
  );
}

export default NavBar;
