import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect, useState } from "react";

export default function ListCategories() {
  const url = "https://wikideas.up.railway.app/api/v1/wikideas/categories/";
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  let api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setCategories(res);
        setError(null);
      } else {
        setCategories(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);
  return (
    <>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor={"#dc3545"}
        />
      )}
      {categories && (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.nameCategory}</li>
          ))}
        </ul>
      )}
    </>
  );
}
