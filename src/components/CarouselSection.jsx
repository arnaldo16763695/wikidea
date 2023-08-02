import { MyCarousel } from "./MyCarousel";
import React from "./css-components/carouselSection.css";

const CarouselSection = () => {
  return (
    <div className="carouselSection">
      <h2>Artículos más recientes</h2>
      <MyCarousel/>
    </div>
  );
};

export default CarouselSection;
