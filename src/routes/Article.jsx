import "quill/dist/quill.snow.css";
import { useQuill } from "react-quilljs";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./article.css";
import toolbar from "../toolbar";

export default function Article() {
  const { articleId } = useParams();
  const url = `https://wikideas.up.railway.app/api/v1/wikideas/articles/${articleId}`;
  const [article, setArticle] = useState({});

  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: {
      toolbar: false,
    },
  });

  useEffect(() => {
    const getAticle = async () => {
      try {
        const res = await fetch(
            `https://wikideas.up.railway.app/api/v1/wikideas/articles/${articleId}`
          ),
          data = await res.json();
        setArticle(data);
        quill.setContents(JSON.parse(data.content));
      } catch (error) {
        console.log(error);
      }
    };
    getAticle();
    

    // console.log(JSON.stringify(article));
  }, [quill, articleId]);

 

  

  return (
    <form className="form-add-article" >
      <div className="container-inputs-add-article">
        <h3>{article.title}</h3>
        <div>Categoria : {article.category?.nameCategory}</div>
      </div>
      <div className="container-buttons-add-article">
        <Link to={`/edit-article/${article.id}`} className="btn-link">
          Editar
        </Link>
        {/* <Link to={"/"} className="btn-link">
          Cancelar
        </Link> */}
      </div>
      <div className="editor">
        <div ref={quillRef}></div>
      </div>
    </form>
  );
}
