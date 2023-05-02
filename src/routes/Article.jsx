import { Link, Form, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import "./article.css";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";

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
 
  const [article, setArticle] = useState("");
  
  const {articleId} = useParams();

  let url = `https://wikideas.up.railway.app/api/v1/wikideas/articles/${articleId}`;
  let urlCategories =
    "https://wikideas.up.railway.app/api/v1/wikideas/categories/";

  useEffect(() => {
    console.log(url)
    const getAticle = async (url) => {
      let res = await fetch(url),
      json = await res.json();
      console.log(json);
      setArticle(json);
    };
    
    getAticle(url);
  }, []);



  return (
    <div className="container-article">
      <div className="inputs">
        <div>
          <h2>{article.title}</h2>
        </div>

        <div>
          <h2>category:{`pendiente`}</h2>
        </div>
      </div>

      <Form className="links">
        <a href="#" className="link-save">
          Editar
        </a>
        <Link to={"/"} className="link-cancel">
          Cancelar
        </Link>
      </Form>

      <div className="container-quill">
        <div
          className="preview editor"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
}
