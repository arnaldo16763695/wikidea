import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./root.css";

const root = () => {
  return (
    <div className="home-container">
      <header className="header Headlines">
        <div className="logo">
          <Link to="/">Colabry</Link>
        </div>
        <nav className="menu">
          <ul>
            <li><Link to="/add-article">Nuevo artículo</Link> </li>
            <li><Link to="/"> Categorías</Link></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">Este es el footer</footer>
    </div>
  );
};

export default root;
