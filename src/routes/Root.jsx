import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./root.css";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import FooterMobile from "../components/FooterMobile";

const root = () => {
  return (
    <div className="home-container">
      <div className="shadow-home">
        <header className="header">
          <NavBar backgroundColor={`background-trans`} />
          {/* <SubNavBar fontColor={`white-color`}/> */}
        </header>
        <main id="main">
          <Home/>
        </main>
        <Footer fontColor={'footer-font-light'}/>
        <FooterMobile svgLeft={''} svgRight={'svgAdd'} linkLeft={'/'} linkRight={'/add-article'}/>
      </div>
    </div>
  );
};

export default root;
