import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import { SelectCategories } from "../components/SelectCategories";
import { toolbar } from "../toolbar";
import { Loader } from "../components/Loader";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Footer from "../components/Footer";
import "./articleEdit.css";
import { SelectCategories } from "../components/SelectCategories";

function ArticleEdit() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [articleTitle, setArticleTitle] = useState("");
  const [article, setArticle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  //   const handleChange = (e) => {
  //     setCategory(e.target.value);
  //   };

  const UpdateArticle = async (data) => {
    try {
      const res = await fetch(
        `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/${article.categoryId}/articles/${articleId}`,
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
      //setCategory("");
       navigate(`/article/${articleId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCategory = async () => {
    console.log(
      `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/articles/${articleId}`
    );
    const dataCategory = {
      categoryId: category,
    };
    

    try {
      const res = await fetch(
        `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/articles/${articleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=utf-8",
          },
          body: JSON.stringify(dataCategory),
        }
      );
      console.log(res);
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

    if (!data.title) {
      alert("datos incompletos");
      return;
    }

    if (category) {
      updateCategory();
    }
    UpdateArticle(data);
  };

  const addContent = (value) => {
    setArticleContent(value);
  };

  useEffect(() => {
    const getAticle = async () => {
      try {
        setLoading(true);
        const res = await fetch(
            `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/articles/${articleId}`
          ),
          data = await res.json();
        setArticle(data);
        setArticleTitle(data.title);
        setArticleContent(data.content);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAticle();

    // console.log(JSON.stringify(article));
  }, []);
  return (
    <div className="content-container">
      <header className="header">
        <NavBar backgroundColor={`background-dark`} />
        <SubNavBar fontColor={`black-color`} />
      </header>
      <main id="main">
        <form className="form-edit-article" onSubmit={handleSubmit}>
          <div className="container-inputs-edit-article">
            <div className="container-label-input">
              <label htmlFor="input-edit-article">Título</label>
              <input
                type="text"
                placeholder="Título de tu Artículo"
                className="input-add-article"
                onChange={(e) => setArticleTitle(e.target.value)}
                value={articleTitle}
                id="input-edit-article"
              />
            </div>
            <div className="container-label-input">
              <label htmlFor="select">Categoría</label>
              <SelectCategories
                handleChange={handleChange}
                url="https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/"
                value={category ? category : article.categoryId}
              />
            </div>
          </div>
          <div className="container-buttons-add-article">
            <Link to={`/article/${articleId}`} className="btn-link">
              Volver
            </Link>
            <button type="submit" className="btn-button">
              Guardar
            </button>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <ReactQuill
              theme="snow"
              value={articleContent}
              onChange={addContent}
              modules={toolbar}
              className="editor-article"
            />
          )}
        </form>
      </main>

      <Footer fontColor={"footer-font-dark"} />
    </div>
  );
}

export default ArticleEdit;
