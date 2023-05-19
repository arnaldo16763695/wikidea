import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./articles.css";
import Pagination from "../components/Pagination";
import { Loader } from "../components/Loader";

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
    
    getArticles(`https://wikideas.up.railway.app/api/v1/wikideas/articles/`);
    
  }, []);

  return (
    <div className="list-articles">
      <h1>Todos los Artículos</h1>
      {loading && <Loader />}

      {articles
        .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
        .map((article) => (
          <Link
            className="card-article"
            style={{ color: "#000" }}
            to={`/article/${article.id}`}
            key={article.id}
          >
            <p><strong>{article.title}</strong></p>
            
          </Link>
        ))}
      <Pagination page={page} setPage={setPage} max={max} />
    </div>
  );
}

export default Articles;
