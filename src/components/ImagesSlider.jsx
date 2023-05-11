import React from "react";
import "./css-components/imagesSlider.css";
const ImagesSlider = () => {
  return (
    <div className="container-slider">
      <div className="slider" id="slider">
        <div className="sliderSection">
          <img src="https://placeimg.com/640/480/arch" alt="" className="sliderImg" />
        </div>
        <div className="sliderSection">
          <img src="https://placeimg.com/640/480/nature" alt="" className="sliderImg" />
        </div>
        <div className="sliderSection">
          <img src="https://placeimg.com/640/480/people" alt="" className="sliderImg" />
        </div>
        <div className="sliderSection">
          <img src="https://placeimg.com/640/480/tech" alt="" className="sliderImg" />
        </div>
        <div className="sliderBtn sliderBtn-right">&#62;</div>
        <div className="sliderBtn sliderBtn-left">&#60;</div>
      </div>
    </div>
  );
};

export default ImagesSlider;
