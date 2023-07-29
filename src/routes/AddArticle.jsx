import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useRef, useState } from "react";
import "./AddArticle.css";
import { Link, useNavigate } from "react-router-dom";
import { SelectCategories } from "../components/SelectCategories";
import { toolbar } from "../toolbar";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";
const AddArticle = () => {
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState("");
  const [category, setCategory] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [emptyTitle, setEmptyTitle] = useState(false);
  const [emptyCategory, setEmptyCategory] = useState(false);
  const [emptyContent, setEmptyContent] = useState(false);
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const saveArticle = async (data) => {
    try {
      const res = await fetch(
        `https://wikideas-app.devcodes.net/api/v1/wikideas/categories/${category}/articles`,
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
  const text = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(category)
    if (!articleTitle.trim()) {
      setEmptyTitle(true);
      setTimeout(() => {
        setEmptyTitle(false);
      }, 3000);
    } else if (!category.trim()) {
      setEmptyCategory(true);
      setTimeout(() => {
        setEmptyCategory(false);
      }, 3000);
    } else if (text.current.unprivilegedEditor.getText() === "\n") {
      setEmptyContent(true);
      setTimeout(() => {
        setEmptyContent(false);
      }, 3000);
    } else {
      const data = {
        title: articleTitle,
        content: articleContent,
      };

      //get text of edito to validate form

      saveArticle(data);
    }
  };

  const addContent = (value) => {
    setArticleContent(value);
  };

  return (
    <div className="content-container">
      <header className="header">
        <NavBar backgroundColor={`background-dark`} />
        <SubNavBar fontColor={`black-color`} />
        <h2
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "1rem" }}
        >
          Crear Artículo
        </h2>
      </header>
      <main id="main">
        <form className="form-add-article" onSubmit={handleSubmit}>
          <div className="container-inputs-add-article">
            <div className="container-label-input">
              {emptyTitle && (
                <p style={{ color: "red" }}>El título no puede estar vacío</p>
              )}
              <label htmlFor="input-add-article">Título</label>
              <input
                type="text"
                placeholder="Título de tu Artículo"
                className="input-add-article"
                onChange={(e) => setArticleTitle(e.target.value)}
                value={articleTitle}
                id="input-add-article"
                required
              />
            </div>
            <div className="container-label-input">
              {emptyCategory && (
                <p style={{ color: "red" }}>
                  La categoría no puede estar vacía
                </p>
              )}
              <label htmlFor="select">Categoría</label>
              <SelectCategories
                handleChange={handleChange}
                url="https://wikideas-app.devcodes.net/api/v1/wikideas/categories/"
              />
            </div>
          </div>
          {emptyContent && (
            <p style={{ color: "red" }}>
              El contenido del articulo no debe estar vacío
            </p>
          )}
          <ReactQuill
            theme="snow"
            value={articleContent}
            onChange={addContent}
            modules={toolbar}
            placeholder="Escribe aquí el contenido de tu artículo."
            className="editor-article"
            ref={text}
          />
          <div className="container-buttons-add-article">
            <button type="submit" className="btn-button">
              Guardar
            </button>
            {/* <Link to={"/"} className="btn-link">
              Cancelar
            </Link> */}
          </div>
        </form>
      </main>
      <Footer fontColor={"footer-font-dark"} />
      <FooterMobile
        svgLeft={"svgHome"}
        svgRight={"svgSave"}
        linkLeft={"/"}
        linkRight={"/add-article"}
        isButton={true}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddArticle;
