import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const SelectCategories = ({ handleChange }) => {
  const url = "https://wikideas.up.railway.app/api/v1/wikideas/categories/";

  const [categories, setCategories] = useState([]);
  let api = helpHttp();
  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
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
      className="input-category-article"
      onChange={handleChange}
    >
      <option value="" defaultValue={""}>
        Elija un Categoría
      </option>
      {categories &&
        categories.map((el) => (
          <option key={el.id} value={el.nameCategory}>
            {el.nameCategory}
          </option>
        ))}
    </select>
  );
};
