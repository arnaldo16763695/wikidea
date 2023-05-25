import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";
import "./AddArticle.css";
import { Link, useNavigate } from "react-router-dom";
import { SelectCategories } from "../components/SelectCategories";
import {toolbar} from '../toolbar'
const AddArticle = () => {
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState("");
  const [category, setCategory] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const saveArticle = async (data) => {
    try {
      const res = await fetch(
        `https://wikideas.up.railway.app/api/v1/wikideas/categories/${category}/articles`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log(res); 08:00.0 08:00.1   10de:1d01  10de:0fb8   rev a1
      setArticleTitle("");
      setCategory("");
      navigate("/list-articles");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(category)
    const data = {
      title: articleTitle,
      content: articleContent,
    };

    //get text of edito to validate form

    if (!data.title || !category) {
      alert("datos incompletos");
      return;
    }

    saveArticle(data);
  };

  const addContent = (value) => {
    setArticleContent(value);
  };

  return (
    <>
      <form className="form-add-article" onSubmit={handleSubmit}>
        <div className="container-inputs-add-article">
          <input
            type="text"
            placeholder="Título de tu Artículo"
            className="input"
            onChange={(e) => setArticleTitle(e.target.value)}
            value={articleTitle}
          />
          <SelectCategories
            handleChange={handleChange}
            url="https://wikideas.up.railway.app/api/v1/wikideas/categories/"
          />
        </div>
        <div className="container-buttons-add-article">
          <button type="submit" className="btn-button">
            Guardar
          </button>
          <Link to={"/"} className="btn-link">
            Cancelar
          </Link>
        </div>
        
        <ReactQuill
          theme="snow"
          value={articleContent}
          onChange={addContent}
          modules={toolbar}
          
        />
      </form>
    </>
  );
};

export default AddArticle;
