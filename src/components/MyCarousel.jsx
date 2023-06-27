import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "../helpers/dataCarousel";
import CardCategory from "./CardCategory";
import  './css-components/myCarousel.css'

export const MyCarousel = () => {
  const product = productData.map((item) => (
    <CardCategory
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    
      <div className="carousel-container">
        
        <Carousel showDots={true} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    
  );
};
