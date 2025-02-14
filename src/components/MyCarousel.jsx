import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../helpers/dataCarousel";
import { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import "./css-components/myCarousel.css";
import CardCarousel from "./CardCarousel";
import { BASE_URL } from "../helpers/base_url";

export const MyCarousel = () => {
  const url = `${BASE_URL}/api/articles`;
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

  // articles.length &&
  //   articles?.forEach((el) => {
  //     urlImages?.forEach((el2) => {
  //       if (el.id === el2.id) {
  //         el.url = el2.url;
  //       }
  //     });
  //   });

  const article =
    articles.length &&
    articles.map((item, index) => (
      <CardCarousel
        key={index}
        name={item.title}
        url={item.CategoriesArticle?.image}
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
