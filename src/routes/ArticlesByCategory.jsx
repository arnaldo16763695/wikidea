import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { helpHttp } from "../helpers/helpHttp";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import { BASE_URL } from "../helpers/base_url";

const ArticlesByCategory = () => {
  const { idCategory } = useParams();
  const urlCategory = `${BASE_URL}/api/articles/categories/${idCategory}`;
  const urlCategory2 = `${BASE_URL}/api/categories/${idCategory}`;
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(6);
  const max = Math.ceil(articles.length / byPage);

  let api = helpHttp();

  useEffect(() => {
    api.get(urlCategory2).then((res) => {
      console.log('arnaldo', res);
      if (!res.err) {
        setCategory(res);
        setError(null);
      } else {
        setCategory(null);
        setError(res);
      }

      setLoading(false);
    });
    setLoading(true);
    api.get(urlCategory).then((res) => {
      //  console.log(res);
      if (!res.err) {
        setArticles(res);
        setError(null);
      } else {
        setArticles(null);
        setError(res);
      }

      setLoading(false);
    });
  }, []);

  return (
    <div className="content-container">
      <header className="header">
        <NavBar backgroundColor={`background-dark`} />
        <SubNavBar fontColor={`black-color`} />
      </header>
      <main id="main">
        {" "}
        <div className="list-articles">
          <h1>Articulos de la Categoría: {category.name} </h1>
          {loading && <Loader />}
          {error && (
            <Message
              msg={`Error ${error.status}: ${error.statusText}`}
              bgColor={"#dc3545"}
            />
          )}
          {articles.length &&
            articles
              .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
              .map((article) => (
                <Link
                  className="card-article"
                  style={{ color: "#000" }}
                  to={`/article/${article.id}`}
                  key={article.id}
                >
                  <p>
                    {article.title}
                  </p>                 
                </Link>
              ))}
          <Pagination page={page} setPage={setPage} max={max} />
        </div>
      </main>

      <Footer fontColor={"footer-font-dark"} />
    </div>
  );
};

export default ArticlesByCategory;
