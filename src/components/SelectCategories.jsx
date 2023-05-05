import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./css-components/selectCategories.css";
export const SelectCategories = ({ handleChange, url, categoryName }) => {
  
  const [categories, setCategories] = useState([]);
  let api = helpHttp();
  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setCategories(res);
      } else {
        setCategories(null);
      }
    });
  }, []);

  if (!categories) return null;
  return (
    <select
      name="category"
      id="select"
      className="select_categories"
      onChange={handleChange}
      value={categoryName || ''}
    >
      <option value="" >
         Elija una Categoría
      </option>
      {categories &&
        categories.map((el) => (
          <option key={el.id} value={el.id}>
            {el.nameCategory}
          </option>
        ))}
    </select>
  );
};
