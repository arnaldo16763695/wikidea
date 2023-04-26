import { useFetch } from "../hooks/useFetch";

export const SelectCategories = ({ url, handleChange }) => {
  const { data, error, loading } = useFetch(url);
 
  if (!data) return null;
  return (
    <select name="category" id="select" className="input-category-article" onChange={handleChange}>
      <option value="" defaultValue={""}>
        Elija un Categoría
      </option>
      {data && data.map((el)=> <option key={el.id} value={el.nameCategory}>{el.nameCategory}</option>)}
    </select>
  );
};
