import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import "./article.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SubNavBar from "../components/SubNavBar";
import FooterMobile from "../components/FooterMobile";
import ModalConfirm from "../components/ModalConfirm";

export default function Article() {
  const [message, setMessage] = useState(false);
  const { articleId } = useParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({});
  const [articleContent, setArticleContent] = useState("");
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const getAticle = async () => {
      try {
        setLoading(true);
        const res = await fetch(
            `https://wikideas-app.devcodes.net/api/v1/wikideas/articles/${articleId}`
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

  const deleteArticle = async () => {
    setOpenModal(false);
    try {
      const res = await fetch(
        `https://wikideas-app.devcodes.net/api/v1/wikideas/categories/${article.categoryId}/articles/${articleId}`,
        {
          method: "DELETE",
        }
      );
      console.log(res);

      //setCategory("");
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
        navigate(`/list-articles`);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const showModalConfirm = () => {
    setOpenModal(true);
  };

  return (
    <div className="content-container">
      {openModal && (
        <ModalConfirm setOpenModal={setOpenModal} action={deleteArticle} />
      )}

      <header className="header">
        <NavBar backgroundColor={`background-dark`} />
        <SubNavBar fontColor={`black-color`} />
        <h2
          style={{ textAlign: "center", fontWeight: "bold", marginTop: "1rem" }}
        >
          Contenido del Artículo
        </h2>
      </header>
      <main id="main">
        <form className="form-view-article">
          {message && <div className="message">Articulo Eliminado</div>}
          <div className="container-inputs-view-article">
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
            <button
              onClick={() => setOpenModal(true)}
              className="btn-delete btn-link "
            >
              Eliminar
            </button>
            <Link to={`/edit-article/${article.id}`} className="btn-link">
              Editar
            </Link>
          </div>
          {loading && <Loader />}
          <ReactQuill
            style={{ border: "1px solid rgba(2,2,2,0.1)" }}
            theme={false}
            value={articleContent}
            readOnly
            className="editor-article"
          />
        </form>
      </main>
      <Footer fontColor={"footer-font-dark"} />
      <FooterMobile
        svgLeft={"svgHome"}
        svgRight={"svgEdit"}
        linkLeft={"/"}
        linkRight={`/edit-article/${articleId}`}
        isButton={false}
      />
    </div>
  );
}
