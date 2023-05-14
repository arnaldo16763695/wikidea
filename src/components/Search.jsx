import React, { useState, useEffect } from "react";

import "./css-components/search.css";
import { Link } from "react-router-dom";
import ImagesSlider from "./ImagesSlider";

const Search = () => {
  const [toSearch, setToSearch] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [search, setSearch] = useState("");
  const url = `https://wikideas.up.railway.app/api/v1/wikideas/articles/`;

  const getArticles = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticlesList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles(url);
    // console.log(Object.keys(toSearch));
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (item) => {
    if (!item) {
      return setToSearch([]);
    }
    const result = articlesList.filter((el) => {
      if (el.title.toString().toLowerCase().includes(item.toLowerCase())) {
        return el;
      }
    });

    setToSearch(result.slice(0, 5));
  };

  return (
    <div className="containerSerach">
      <form className="form-search" role="search">
        <div className="title">
          <h1>Colabry</h1>
        </div>
        <input
          autoComplete="off"
          className="input-search"
          type="text"
          value={search}
          onChange={handleChange}
        />
        {Object.keys(toSearch).length > 0 && (
          <div className="articles-list">
            <ul>
              {toSearch.map((article) => (
                <li key={article.id}>
                  <Link to={`/article/${article.id}`}>
                    <div>{article.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {Object.keys(toSearch).length === 0 && search ? (
          <div className="whitoutResult">Palabra no encontrada....</div>
        ) : (
          ""
        )}
      </form>

      <ImagesSlider />
    </div>
  );
};

export default Search;
