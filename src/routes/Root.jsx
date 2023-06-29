import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./root.css";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Footer from "../components/Footer";

const root = () => {
  return (
    <div className="home-container">
      <div className="shadow-home">
        <header className="header">
          <NavBar />
          <SubNavBar/>
        </header>
        <main id="main">
          <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default root;
