import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
// import { SelectCategories } from "../components/SelectCategories";
import { toolbar } from "../toolbar";
import { Loader } from "../components/Loader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./articleEdit.css";
import { SelectCategories } from "../components/SelectCategories";
import FooterMobile from "../components/FooterMobile";
import { BASE_URL } from "../helpers/base_url";

function ArticleEdit() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { articleId } = useParams();
  const [articleTitle, setArticleTitle] = useState("");
  const [article, setArticle] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const handleChange = (e) => {
    setCategoryId(e.target.value);
  };

  //   const handleChange = (e) => {
  //     setCategory(e.target.value);
  //   };

  const UpdateArticle = async (data) => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/articles/${articleId}`,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(category)

    const data = {
      title: articleTitle,
      contentText: articleContent,
      contentHtml: articleContent,
      categoriesArticleId: categoryId
    };

    if (!data.title) {
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
        setLoading(true);
        const res = await fetch(
          `${BASE_URL}/api/articles/${articleId}`
        ),
          data = await res.json();
        setArticle(data);
        setArticleTitle(data.title);
        setArticleContent(data.contentHtml);
        setCategoryId(data.categoriesArticleId)
        setLoading(false);
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
        <h2 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '1rem' }}>Editar Artículo</h2>

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
                required
              />
            </div>
            <div className="container-label-input">
              <label htmlFor="select">Categoría</label>
              <SelectCategories
                handleChange={handleChange}
                url={`${BASE_URL}/api/categories`}
                value={categoryId ? categoryId : categoryId}
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
      <FooterMobile svgLeft={'svgHome'} svgRight={'svgSave'} linkLeft={'/'} isButton={true} handleSubmit={handleSubmit} />

    </div>
  );
}

export default ArticleEdit;
