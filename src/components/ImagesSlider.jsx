import React from "react";
import "./css-components/imagesSlider.css";
import images from "../exports/images";
import { motion } from "framer-motion";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useState } from "react";

const ImagesSlider = () => {
  const url = "https://wikideas.up.railway.app/api/v1/wikideas/categories/";
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let itemColor = "item-color1";
  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setCategories(res);
        setError(null);
      } else {
        setCategories(null);
        setError(res);
      }
    });
  }, [url]);
  return (
    <motion.div className="slider-container">
      <motion.div
        className="slider"
        drag="x"
        dragConstraints={{ right: 0, left: -2000 }}
      >
        {" "}
        {categories.map((category, item) => {
          if (itemColor === "") {
          }
          return (
            <motion.div className="item" key={item}>
              {/* <img src={image} alt="" /> */}
              <a href="">
                <h4 className="title-category">{category.nameCategory}</h4>
              </a>

              {<div className={`item-category item-color${item}`}></div>}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ImagesSlider;
