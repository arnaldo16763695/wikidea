import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./AddArticle.css";
import { Link } from "react-router-dom";

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

const AddArticle = () => {
  const [value, setValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  return (
    <>
      <div className="inputs-add-article">
        <input
          type="text"
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
          value={titleValue}
          placeholder="Título del Artículo"
          className="input-title-article"
        />
        <select name="" id="" className="input-category-article">
          <option value="" defaultValue={""}>
            Elija un Categoría
          </option>
          <option value="">Geografía</option>
          <option value="">Arte</option>
          <option value="">Política</option>
        </select>
      </div>
      <div className="links-add-article">
        <a href="#" className="link-save">
          Guardar
        </a>
        <Link to={"/"} className="link-cancel">
          Cancelar
        </Link>
      </div>
      <div className="container-quill">

        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="editor-input"
          modules={modules}
        />
      </div>

      
    </>
  );
};

export default AddArticle;
