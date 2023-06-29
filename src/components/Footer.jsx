import "./css-components/footer.css";

const Footer = (props) => {
  return (
    <footer className={`footer ${props.fontColor}`}>
      Copyright © 2022 WikiDea Todos los derechos reservados 2022 - 2023
    </footer>
  );
};

export default Footer;
