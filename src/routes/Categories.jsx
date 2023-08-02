import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { helpHttp } from "../helpers/helpHttp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./categories.css";

export default function Categories() {
  const url =
    "https://wikideas-app.devcodes.net/api/v1/wikideas/categories/";
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(6);
  const max = Math.ceil(categories.length / byPage);
  const dataCategories = [];
  let api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      console.log(res);
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
    <div className="content-container">
      <header className="header">
        <NavBar backgroundColor={`background-dark`} />
      </header>
      <main id="main">
        {" "}
        <div className="list-articles">
          <h1>Todas las Categorías</h1>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor={"#dc3545"}
            />
          )}
          {Object.keys(categories).length > 0 &&
            categories
              .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
              .map((category) => (
                <Link
                  className="card-category"
                  style={{ color: "#000" }}
                  to={`/articles-by-category/${category.id}`}
                  key={category.id}
                >
                  <p>
                    <strong>{category.nameCategory}</strong>
                  </p>
                </Link>
              ))}

          {Object.keys(categories).length > 0 && (
            <Pagination page={page} setPage={setPage} max={max} />
          )}
        </div>
      </main>
      <Footer fontColor={"footer-font-dark"}/>
      
    </div>
  );
}
