import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {Loader} from "../components/Loader";
import "./article.css";

export default function Article() {
  const [message, setMessage] = useState(false);
  const { articleId } = useParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [articleContent, setArticleContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const getAticle = async () => {
      try {
        setLoading(true);
        const res = await fetch(
            `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/articles/${articleId}`
          ),
          data = await res.json();
        setArticle(data);
        setArticleContent(data.content);
        setLoading(false);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
    };
    getAticle();
  }, [articleId]);

  const deleteArticle = async ()=>{
    if(confirm(`¿Estas seguro de eliminar el artículo ${article.title}?`)){
       try {
      const res = await fetch(
        `https://wikideas-api-klaa.onrender.com/api/v1/wikideas/categories/${article.categoryId}/articles/${articleId}`,
        {
          method: "DELETE",
        }
      );
       console.log(res);
      
      //setCategory("");
      setMessage(true)
      setTimeout(() => {
        setMessage(false)
        navigate(`/list-articles`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
    }
   
  }

  return (
    <form className="form-add-article">
    {message && <div className="message">Articulo Eliminado</div>}
      <div className="container-inputs-add-article">
        <p>
          <strong>Título:</strong> {article.title}
        </p>
        <div>
          <p>
            {" "}
            <strong>Categoria:</strong> {article.category?.nameCategory}
          </p>
        </div>
      </div>
      <div className="container-buttons-add-article">
        <Link to={`/edit-article/${article.id}`} className="btn-link">
          Editar
        </Link>
        <button onClick={deleteArticle} className="link-delete btn-link">
          Eliminar
        </button>
        {/* <Link to={"/"} className="btn-link">
          Cancelar
        </Link> */}
      </div>
      {loading && <Loader />}
      <ReactQuill
        style={{ border: "1px solid rgba(2,2,2,0.1)" }}
        theme={false}
        value={articleContent}
        readOnly
      />
    </form>
  );
}
