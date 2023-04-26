import { Link, Form } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./article.css";
import { useState } from "react";
import { SelectCategories } from "../components/SelectCategories";

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

export default function Article() {
  const [value, setValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="container-article">
      <div className="inputs">
        <input
          type="text"
          placeholder="Título del Artículo"
          className="input-title-article"
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        />
        <SelectCategories
          url="https://wikideas.up.railway.app/api/v1/wikideas/categories/"
          handleChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>

      <Form className="links">
        <a href="#" className="link-save">
          Guardar
        </a>
        <Link to={"/"} className="link-cancel">
          Cancelar
        </Link>
      </Form>

      <div className="container-quill">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="editor-input"
          modules={modules}
        />
      </div>
    </div>
  );
}
