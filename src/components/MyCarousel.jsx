import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { urlImages, responsive } from "../helpers/dataCarousel";
import CardCategory from "./CardCategory";
import "./css-components/myCarousel.css";
import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const MyCarousel = () => {
  const url =
    "https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setCategories(res);
        } else {
          setCategories(null);
        }
      });
  }, [url]);
  console.log(categories);

  categories.length && categories?.forEach((el) => {
    urlImages?.forEach((el2) => {
      if (el.id===el2.id) {
        el.url = el2.url
      }
    });
  });

  const catg = categories.length && categories.map((item, index) => (
    <CardCategory
      key={index}
      name={item.nameCategory}
      url={item.url}
      categoryId={item.id}
      // description={item.description}
    />
  ));

  return (
    <div className="carousel-container">
      {

       categories.length && <Carousel showDots={true} responsive={responsive}>
        {catg}
      </Carousel>
      }
    <h2 className="title-carousel">Nuestras categorías</h2>
    </div>
  );
};
