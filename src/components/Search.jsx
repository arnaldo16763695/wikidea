import React, { useState, useEffect } from "react";
import "./css-components/search.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helpers/base_url";

const Search = () => {
  const [toSearch, setToSearch] = useState([]);
  const [articlesList, setArticlesList] = useState([]);
  const [search, setSearch] = useState("");
  const url = `${BASE_URL}/api/articles`;

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
  const clearList = () => {
    setToSearch([]);
    setSearch("");
  };

  const clearInput = (e) => {};
  return (
    <form className="form-search" role="search">
      {Object.keys(toSearch).length > 0 && (
        <div className="articles-list">
          <ul className="ul-search">
            {toSearch.map((article) => (
              <li key={article.id}>
                <Link to={`/article/${article.id}`} onClick={clearList}>
                  <div>{article.title}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* {Object.keys(toSearch).length === 0 && search ? (
        <div className="whitoutResult">Palabra no encontrada....</div>
      ) : (
        ""
      )} */}
      <input
        autoComplete="off"
        className="input-search"
        type="text"
        value={search}
        onChange={handleChange}
        onBlur={clearInput}
      />
    </form>
  );
};

export default Search;
