import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import "./main.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import AddArticle from "./routes/AddArticle";
import Article from "./routes/Article";
import Categories from "./routes/Categories";
import Articles from "./routes/Articles";
import ArticleEdit from "./routes/ArticleEdit";
import ArticlesByCategory from "./routes/ArticlesByCategory";
import Home from "./components/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "add-article",
    element: <AddArticle />,
    errorElement: <ErrorPage />,
  },
  {
    path: "article/:articleId",
    element: <Article />,
    errorElement: <ErrorPage />,
  },
  {
    path: "edit-article/:articleId",
    element: <ArticleEdit />,
    errorElement: <ErrorPage />,
  },
  {
    path: "list-categories",
    element: <Categories />,
    errorElement: <ErrorPage />,
  },
  {
    path: "list-articles",
    element: <Articles />,
    errorElement: <ErrorPage />,
  },
  {
    path: "articles-by-category/:idCategory",
    element: <ArticlesByCategory />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
