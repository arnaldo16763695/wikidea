import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { helpHttp } from "../helpers/helpHttp";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";

const ArticlesByCategory = () => {
  const { idCategory } = useParams();
  const url = `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/${idCategory}/articles`;
  const urlCategory = `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/${idCategory}/articles`;
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(6);
  const max = Math.ceil(articles.length / byPage);

  let api = helpHttp();

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setArticles(res);
        setError(null);
      } else {
        setArticles(null);
        setError(res);
      }

      setLoading(false);
    });

    api.get(urlCategory).then((res) => {
      // console.log(res);
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
          <h1>Articulos de la Categoría </h1>
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
                    <strong>Título:</strong> {article.title}
                  </p>

                  <p>
                    <strong>Categoría: </strong>
                    {article.category?.nameCategory}
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
