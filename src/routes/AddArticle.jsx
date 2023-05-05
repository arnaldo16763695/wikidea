// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { useState } from "react";
import "./AddArticle.css";
import { Link, useNavigate } from "react-router-dom";
import { SelectCategories } from "../components/SelectCategories";
import toolbar from "../toolbar";

const AddArticle = () => {
  const navigate = useNavigate();
  const [articleTitle, setArticleTitle] = useState("");
  const [category, setCategory] = useState("");
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar,
    },
  });
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
      // console.log(res);
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
      content: JSON.stringify(quill.getContents()),
    };

    //get text of edito to validate form
  const textEditor = quill.getLength();
    
    if (!data.title || !category || textEditor==1 ) {
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
        {/* <ReactQuill
          modules={modules}
          theme="snow"
          value={articleContent}
          onChange={addContent}
        /> */}
        <div className="editor">
          <div ref={quillRef}></div>
        </div>
      </form>
    </>
  );
};

export default AddArticle;
