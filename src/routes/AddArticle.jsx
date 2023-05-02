import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./AddArticle.css";
import { Link } from "react-router-dom";
import { SelectCategories } from "../components/SelectCategories";
import { helpHttp } from "../helpers/helpHttp";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    [{ color: [] }, { background: [] }],
    ["bold", "italic", "underline", "strike"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};
const initialForm = {
  title: "",
  category: "",
  content: "",
};
const AddArticle = () => {
  const api = helpHttp();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const createArticle = async (data) => {
    // api
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
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    //   .post(
    //     `https://wikideas.up.railway.app/api/v1/wikideas/categories/${category}/articles`,
    //     { body: data }
    //   )
    //   .then((res) => {
    //     if (!res.err) {
    //       console.log("todo OK");
    //     } else {
    //       console.log(res);
    //     }
    //   });
  };
  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
    };

    if (!data.title) {
      alert("Datos Incompletos");
      return;
    }
    console.log(
      `https://wikideas.up.railway.app/api/v1/wikideas/categories/${category}/articles`
    );
    console.log(JSON.stringify(data));
    createArticle(data);
  };
  const handleReset = (e) => {};
  return (
    <>
      <form className="form-add-article" onSubmit={handleSubmit}>
        <div className="inputs-add-article">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Título del Artículo"
            className="input-title-article"
          />
          <SelectCategories
            url="https://wikideas.up.railway.app/api/v1/wikideas/categories/"
            handleChange={handleChange}
          />
        </div>
        <div className="links-add-article">
          <button type="submit" className="link-save">
            Guardar
          </button>
          <Link to={"/"} className="link-cancel">
            Cancelar
          </Link>
        </div>
        <div className="container-quill">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className="editor-input"
            modules={modules}
          />
        </div>
      </form>
    </>
  );
};

export default AddArticle;
