import { useEffect, useState } from "react";
import "./css-components/availableCategory.css";
import { helpHttp } from "../helpers/helpHttp";
import CardCategory from "./CardCategory";
import { BASE_URL } from "../helpers/base_url";

const AvailableCategory = () => {
  const [categories, setCategories] = useState([]);
  const api = helpHttp();
  const url = `${BASE_URL}/api/categories`;
  const getCategories = (urlCategories) => {
    api.get(urlCategories).then((res) => {
      if (res) {
        setCategories(res);
      }
    });
  };

  useEffect(() => {
    getCategories(url);
  }, [url]);

  return (
    <div className="available-category-content">
      <h2 className="title-available-category-content">
        Conoce todas las categorías disponibles
      </h2>
      <div className="card-category-item-content">
        {categories.length &&
          categories.map((category) => (
            <div className="available-category-card" key={category.id}>
              <CardCategory
                name={category.name}
                url={category.image}
                categoryId={category.id} 
              />
            </div>
          ))} 
      </div>
    </div>
  );
};

export default AvailableCategory;
