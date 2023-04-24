import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./AddArticle.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    [{ 'color': [] }, { 'background': [] }], 
    ["bold", "italic", "underline", "strike", "blokquote"],
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
  const [editorVisible, setEditorVisible] = useState(false);
  return (
    <div className="container">
    {editorVisible ? <button onClick={()=>setEditorVisible(false)}>Guardar</button>
    :<button onClick={()=>setEditorVisible(true)}>Editar</button>
    }
      <div className="row">
        {editorVisible ? (
          <div className="editor">
            <ReactQuill
              theme="snow"
              value={value}
              onChange={setValue}
              className="editor-input"
              modules={modules}
            />
          </div>
        ) : (
          <div
            className="ql-editor display-theme"
            dangerouslySetInnerHTML={{ __html: value }}
          />
        )}

        {/* <div className="preview">{value}</div> */}
      </div>
    </div>
  );
};

export default AddArticle;
