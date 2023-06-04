import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./root.css";
import NavBar from "../components/NavBar";

const root = () => {
  return (
    <div className="home-container">
      <header className="header Headlines">
        <NavBar />
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer Headlines">
        Copyright © 2022 WikiDea Todos los derechos reservados 2022 - 2023
      </footer>
    </div>
  );
};

export default root;
