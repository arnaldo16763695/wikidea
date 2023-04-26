import { helpHttp } from "../helpers/helpHttp";
import { useLoaderData } from "react-router-dom";

const url = "https://wikideas.up.railway.app/api/v1/wikideas/categories/";
export async function loader() {
  const categories = helpHttp();
  await categories.get(url).then((res) => {
    console.log(res);
  });
  return { categories };
}

export default function ListCategories() {
  const { categories } = useLoaderData();
  console.log(categories)
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.nameCategory}</li>
        ))}
      </ul>
    </>
  );
}
