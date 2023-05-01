import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./AddArticle.css";
import { Link } from "react-router-dom";
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

const AddArticle = () => {
  const [value, setValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  return (
<>
      <form className="form-add-article">
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
          <SelectCategories
            url="https://wikideas.up.railway.app/api/v1/wikideas/categories/"
            handleChange={(e) => {
              setCategory(e.taget.value);
            }}
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
            value={value}
            onChange={setValue}
            className="editor-input"
            modules={modules}
          />
        </div>
      </form>
     
</>
  );
};

export default AddArticle;
