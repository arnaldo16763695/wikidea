import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
// import { SelectCategories } from "../components/SelectCategories";
import toolbar from "../toolbar";

function ArticleEdit() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("")
  const { articleId } = useParams();
  const [articleTitle, setArticleTitle] = useState("");
  const [article, setArticle] = useState("");
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar,
    },
  });

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
      content: JSON.stringify(quill.getContents()),
    };

    //get text of edito to validate form
  const textEditor = quill.getLength();
    
    if (!data.title || textEditor==1 ) {
      alert("datos incompletos");
      return;
    }
    
    UpdateArticle(data);
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
        quill.setContents(JSON.parse(data.content));
      } catch (error) {
        console.log(error);
      }
    };
    getAticle();

    // console.log(JSON.stringify(article));
  }, [quill, articleId]);
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
          categoryName={article.categoryId}
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

      <div className="editor">
        <div ref={quillRef}></div>
      </div>
    </form>
  );
}

export default ArticleEdit;
