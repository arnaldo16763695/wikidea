import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import AddArticle from "./routes/AddArticle";
import Search from "./components/Search";
import Article from "./routes/Article";
import ListCategories, {loader as listcatLoader} from "./routes/ListCategories";

const router = createBrowserRouter([
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
        path: "list-categories",
        element: <ListCategories />,
        loader: listcatLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
