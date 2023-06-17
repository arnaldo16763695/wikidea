import { useState } from "react";
import "./css-components/navBar.css";
import { Link } from "react-router-dom";
import Search from "./Search";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navBar">
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* <div className="nav_logo">
        <Link to={"/"}>
          <svg
            width="67"
            height="48"
            viewBox="0 0 67 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo"
          >
            <g clipPath="url(#clip0_107_15)">
              <path
                d="M37.0524 17.6373C37.0524 17.6373 40.7344 19.752 51.9068 19.752C51.9068 19.752 53.9482 19.8449 54.2364 19.8449C56.4364 19.8449 57.782 20.7083 58.2612 23.175C59.0986 27.4776 59.4619 28.1747 63.4953 28.1747C65.4156 28.1747 66.9999 28.2748 66.9999 29.2812C66.9999 30.0855 66.4883 30.2536 66.1353 30.2536H48.6119C45.8218 30.2536 43.0726 30.9882 40.6338 32.4093C39.4929 33.0743 38.5532 33.7464 38.4918 34.1789"
                fill="#035E4C"
              />
              <path
                d="M36.9876 17.6373L21.1611 17.9055C21.1372 18.9404 20.8797 19.9772 20.9325 21.0032C21.173 25.7347 23.0473 29.9068 25.4758 33.7392C28.3649 38.2992 31.5728 42.6339 34.6579 47.0562C34.866 47.3547 35.1287 47.6103 35.4118 47.8927C35.5994 48.0804 35.9234 48.0161 36.007 47.7569C36.0121 47.7426 36.0155 47.7283 36.0172 47.714C36.3685 45.8478 36.7096 43.9816 37.0507 42.1137C37.5112 39.5915 37.9716 37.0711 38.4287 34.549C38.4287 34.549 39.1006 32.0339 40.8282 26.5999C42.5576 21.1605 36.9876 17.6373 36.9876 17.6373Z"
                fill="#4C8201"
              />
              <path
                d="M21.1629 17.9055L36.9894 17.6374C36.9894 17.6374 37.1787 17.7571 37.4771 17.9877C37.1309 17.6713 36.8256 17.3406 36.5664 17.0242C36.3498 16.7418 36.1418 16.4576 35.9473 16.168C34.5847 14.1374 34.085 11.7368 33.7115 9.29863C33.101 5.30712 30.9606 2.04491 26.6595 1.53905C24.1269 1.24053 21.7376 1.65345 19.8122 3.67155C19.5853 3.90928 19.0805 4.00581 18.7411 3.94325C17.5388 3.72696 16.3552 3.39806 15.1597 3.13887C10.5959 2.15752 6.03389 1.17797 1.46672 0.218076C1.10857 0.143001 0.886865 0.0143002 0.373527 0.0893757C0.291666 0.101888 0.197867 0.262764 0.173991 0.346777C0.129649 0.498715 0.194456 0.702492 0.318953 0.793655C0.57818 0.983131 0.808415 1.10826 1.10346 1.20478C4.38132 2.27729 7.67453 3.29796 10.9524 4.37046C13.6316 5.24634 16.0482 6.60842 17.8134 8.96079C19.3841 11.0557 20.3255 13.4796 20.8218 16.0876C20.936 16.6882 21.0793 17.3013 21.0657 17.9055"
                fill="#FF351D"
              />
              <path
                d="M27.3074 6.36912C27.1078 6.01698 26.7667 5.77745 26.3864 5.68808L20.0217 4.18299L18.6267 3.88448C18.6113 3.88269 18.596 3.8809 18.5806 3.87912C17.9496 3.76472 17.3254 3.62171 16.7012 3.47156C16.135 3.33571 15.5688 3.19808 14.9992 3.07474C10.4354 2.09161 5.87337 1.11205 1.30619 0.152158C0.94805 0.077083 0.724638 -0.0516177 0.213005 0.0234577C0.131144 0.0359703 0.0373443 0.196846 0.0134681 0.279072C-0.0308734 0.43101 0.0339334 0.634786 0.158431 0.725949C0.417658 0.915425 0.647893 1.04055 0.942934 1.13708C4.16281 2.19171 7.39803 3.19629 10.6179 4.24734C10.6759 4.26701 10.7339 4.28488 10.7919 4.30454C10.9164 4.34566 11.0409 4.38856 11.1636 4.43146C13.5717 5.06602 23.0881 7.57032 25.0135 8.01005C27.2221 8.51413 27.4148 7.65613 27.4148 6.70159C27.4165 6.59792 27.3722 6.48173 27.3074 6.36912Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_107_15">
              <rect width="67" height="48" fill="white" />
            </clipPath>
            </defs>
          </svg>
        </Link>
      </div> */}
      <Search/>
      <Link className="link-add-content" to="/add-article">
        Crear Contenido
      </Link>
      <div className={`nav_items ${isOpen && "open"}`}>
        <Link onClick={() => setIsOpen(!isOpen)} to="/">
          Inicio
        </Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/add-article">
          Crear artículo
        </Link>{" "}
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-categories">
          {" "}
          Categorías
        </Link>
        <Link onClick={() => setIsOpen(!isOpen)} to="/list-articles">
          {" "}
          Articulos
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
