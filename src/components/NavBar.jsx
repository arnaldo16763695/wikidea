import { useState } from "react";
import "./css-components/navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navBar">
      <div className="nav_logo">Colabry</div>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link onClick={() => setIsOpen(!isOpen)} to="/add-article">Crear artículo</Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-categories"> Categorías</Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-articles"> Articulos</Link>
      </div>
      <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default NavBar;