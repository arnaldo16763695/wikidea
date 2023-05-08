import React, { useState, useEffect } from "react";

import "./css-components/search.css";
import { Link } from "react-router-dom";

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
      console.log(toSearch);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticles(url);
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
    
    
      setToSearch(result);
    
  };

  return (
    <form className="form-search" role="search">
      <input
        autoComplete="off"
        className="input-search"
        type="text"
        value={search}
        onChange={handleChange}
      />
      <div className="articles-list">
        <ul>
          {toSearch &&
            toSearch.map((article) => (
              <li key={article.id}>
                <Link to={`/article/${article.id}`}>{article.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </form>
  );
};

export default Search;
