import { Link } from "react-router-dom";
import "./css-components/footer.css";

const icons = {
  svgHome: (
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
  ),
  svgAdd: (
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
  ),
  svgSave: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-floppy"
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
      <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
      <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M14 4l0 4l-6 0l0 -4" />
    </svg>
  ),
};

const FooterMobile = (props) => {
  return (
    <footer className={`footer-mobile`}>
      <Link to={props.linkLeft} className="link-footer">
        {icons[props.svgLeft]}
      </Link>
      {props.isButton ? (
        <Link
          to={props.linkRight}
          onClick={props.handleSubmit}
          className="link-footer"
        >
          {icons[props.svgRight]}
        </Link>
      ) : (
        <Link to={props.linkRight} className="link-footer">
          {icons[props.svgRight]}
        </Link>
      )}
    </footer>
  );
};

export default FooterMobile;
