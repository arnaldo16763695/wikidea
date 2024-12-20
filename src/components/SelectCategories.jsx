import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./css-components/selectCategories.css";
export const SelectCategories = ({ handleChange, url, value }) => {
  
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
      value={value}
      required
    >
      <option value="" >
         Elija una Categoría
      </option>
      {Object.keys(categories).length > 0 &&
        categories.map((el) => (
          <option key={el.id} value={el.id}>
            {el.name}
          </option>
        ))}
    </select>
  );
};
