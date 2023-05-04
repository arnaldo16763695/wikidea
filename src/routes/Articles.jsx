import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './articles.css'

function Articles() {
  const [articles, setArticles] = useState([]);
  const getArticles = async (url) => {
    try {
      let res = await fetch(url),
        articles = await res.json();
      console.log(res, articles);
      setArticles(articles);
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
      <h2>Articulos</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link style={{ color: "#000" }} to={`/article/${article.id}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Articles;
