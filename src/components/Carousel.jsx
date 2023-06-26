import './css-components/carousel.css'


export const Carousel = () => {
  const handleOnClick=()=>{

  }
  return (
    <div className="carousel-container">
      <h2>Carousel</h2>
      <div className="carousel-list" id="carousel-list">
        <button
          className="carousel-arrow carousel-prev"
          id="button-prev"
          onClick={handleOnClick}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            ></path>
          </svg>
        </button>
        <div className="carousel-track" id="track">
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/1.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/2.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/3.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/4.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/5.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/6.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/7.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/8.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/9.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
          <div className="carousel">
            <div>
              <a href="http://">
                <h4>
                  <small>Imagen:</small> mas
                </h4>
                <picture>
                  <img src="../../public/images/10.jpg" alt="" />
                </picture>
              </a>
            </div>
          </div>
        </div>

        <button
          className="carousel-arrow carousel-next"
          id="button-prev"
          onClick={handleOnClick}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
