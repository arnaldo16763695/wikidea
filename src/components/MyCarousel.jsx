import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { urlImages, responsive } from "../helpers/dataCarousel";
import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./css-components/myCarousel.css";
import CardCarousel from "./CardCarousel";

export const MyCarousel = () => {
  const url = "https://wikideas-app.devcodes.net/api/v1/wikideas/articles/";
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        //  console.log(res);
        if (!res.err) {
          setArticles(
            res.sort(
              (y, x) => Date.parse(x.createdAt) - Date.parse(y.createdAt)
            ).slice(0,10)
          );
        } else {
          setArticles(null);
        }
      });
  }, [url]);
  // console.log(articles);

  articles.length &&
    articles?.forEach((el) => {
      urlImages?.forEach((el2) => {
        if (el.id === el2.id) {
          el.url = el2.url;
        }
      });
    });

  const article =
    articles.length &&
    articles.map((item, index) => (
      <CardCarousel
        key={index}
        name={item.title}
        url={item.url}
        articleId={item.id}
        // description={item.description}
      />
    ));

  return (
    <>
      {articles.length && (
        <Carousel showDots={true} responsive={responsive}>
          {article}
        </Carousel>
      )}
    </>
  );
};
