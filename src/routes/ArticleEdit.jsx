import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import { SelectCategories } from "../components/SelectCategories";
import {toolbar} from '../toolbar'

function ArticleEdit() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("")
  const { articleId } = useParams();
  const [articleTitle, setArticleTitle] = useState("");
  const [article, setArticle] = useState("");
  const [articleContent, setArticleContent] = useState("")
  
//   const handleChange = (e) => {
//     setCategory(e.target.value);
//   };
  
  const UpdateArticle = async (data) => {
    try {
      const res = await fetch(
        `https://wikideas.up.railway.app/api/v1/wikideas/categories/${article.categoryId}/articles/${articleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log(res);
      setArticleTitle("");
      setCategory("");
      navigate(`/article/${articleId}`);
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

   
    
    if (!data.title ) {
      alert("datos incompletos");
      return;
    }
    
    UpdateArticle(data);
  };

  const addContent = (value) => {
    setArticleContent(value);
  };

  useEffect(() => {
    const getAticle = async () => {
      try {
        const res = await fetch(
            `https://wikideas.up.railway.app/api/v1/wikideas/articles/${articleId}`
          ),
          data = await res.json();
        setArticle(data);
        setArticleTitle(data.title);
        setArticleContent(data.content);
        
      } catch (error) {
        console.log(error);
      }
    };
    getAticle();

    // console.log(JSON.stringify(article));
  }, []);
  return (
    <form className="form-add-article" onSubmit={handleSubmit}>
      <div className="container-inputs-add-article">
        <input
          type="text"
          placeholder="Título de tu Artículo"
          className="input"
          onChange={(e) => setArticleTitle(e.target.value)}
          value={articleTitle}
        />
        <h3>Categoría: {article.category?.nameCategory}</h3>
        {/* <SelectCategories
          handleChange={handleChange}
          url="https://wikideas.up.railway.app/api/v1/wikideas/categories/"
          
        /> */}
      </div>
      <div className="container-buttons-add-article">
        <button type="submit" className="btn-button">
          Guardar
        </button>
        {/* <Link to={"/"} className="btn-link">
          Cancelar
        </Link> */}
      </div>

      <ReactQuill
          theme="snow"
          value={articleContent}
          onChange={addContent}
          modules={toolbar}
        />
    </form>
  );
}

export default ArticleEdit;
