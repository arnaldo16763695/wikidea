import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import FooterMobile from "../components/FooterMobile";
import AvailableCategory from "../components/AvailableCategory";
import "./root.css";
import { MyCarousel } from "../components/MyCarousel";
import CarouselSection from "../components/CarouselSection";

const root = () => {
  return (
    <div className="container-root">
    
      <div className="home-video">
        <video autoPlay muted loop id="myVideo">
          <source src="/images/home-video.mp4" type="video/mp4" />
        </video>
        <div className="shadow-home">
          <header className="header">
            <NavBar backgroundColor={`background-trans`} />
            {/* <SubNavBar fontColor={`white-color`}/> */}
          </header>
          <Home />
        </div>
      </div>
      <AvailableCategory />
      <CarouselSection />
      <Footer fontColor={"footer-font-light"} />
      <FooterMobile
        svgLeft={""}
        svgRight={"svgAdd"}
        linkLeft={"/"}
        linkRight={"/add-article"}
      />
    </div>
  );
};

export default root;
