import { Link } from "react-router-dom";
import "./css-components/footer.css";

const FooterMobile = () => {
  return (
    <footer className={`footer-mobile`}>
      <Link to={'/'}  className="link-footer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home"
          width="100"
          height="100"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      </Link>
      <Link to={'/add-article'} className="link-footer" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-plus"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M5 12l14 0" />
      </svg>
      </Link>
    </footer>
  );
};

export default FooterMobile;
