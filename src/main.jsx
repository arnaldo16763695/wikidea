import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import "./main.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import AddArticle from "./routes/AddArticle";
import Search from "./components/Search";
import Article from "./routes/Article";
import Categories from "./routes/Categories";
import Articles from "./routes/Articles";
import ArticleEdit from "./routes/ArticleEdit";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Search /> },
      {
        path: "add-article",
        element: <AddArticle />,
      },
      {
        path: "article/:articleId",
        element: <Article />,
      },
      {
        path: "edit-article/:articleId",
        element: <ArticleEdit />,
      },
      {
        path: "list-categories",
        element: <Categories />,
      },
      {
        path: "list-articles",
        element: <Articles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
