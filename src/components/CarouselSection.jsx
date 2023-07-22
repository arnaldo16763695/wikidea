import { MyCarousel } from "./MyCarousel";
import React from "./css-components/carouselSection.css";

const CarouselSection = () => {
  return (
    <div className="carouselSection">
      <h2>Artículos destacados</h2>
      <MyCarousel/>
    </div>
  );
};

export default CarouselSection;
