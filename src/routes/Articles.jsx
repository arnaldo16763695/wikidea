import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./articles.css";
import Pagination from "../components/Pagination";
import { Loader } from "../components/Loader";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(6);
  const max = Math.ceil(articles.length / byPage);
  const [loading, setLoading] = useState(false);

  const getArticles = async (url) => {
    try {
      setLoading(true);
      let res = await fetch(url),
        articles = await res.json();
      // console.log(res, articles);
      setArticles(articles);
      setLoading(false);

      if (!res.ok) throw { status: res.status, statusText: res.statusText };
    } catch (error) {
      let message = error.statusText || "Ocurrió un error";
      console.log(error.status, message);
    }
  };
  useEffect(() => {
    getArticles(
      `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/articles/`
    );
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
          <h1>Todos los Artículos</h1>
          {loading && Object.keys(articles).length > 0 && <Loader />}

          {articles
            .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
            .map((article) => (
              <Link
                className="card-article"
                style={{ color: "#000" }}
                to={`/article/${article.id}`}
                key={article.id}
              >
                <p>
                  <strong>{article.title}</strong>
                </p>
              </Link>
            ))}
          {Object.keys(articles).length > 0 && (
            <Pagination page={page} setPage={setPage} max={max} />
          )}
        </div>
      </main>
      <Footer fontColor={"footer-font-dark"}/>
    </div>
  );
}

export default Articles;
