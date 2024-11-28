import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Components/HomePage/HomePage.jsx";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";
import TechnologyNews from "./Components/TechnologyNews/TechnologyNews.jsx";
import GeneralNews from "./Components/GeneralNews/GeneralNews.jsx";
import PoliticsNews from "./Components/PoliticsNews/PoliticNews.jsx";
import Login from "./Components/Login/Login.jsx";
import Singup from "./Components/Singup/Singup.jsx";
import ShowcompleteArticle from "./Components/ShowCompleteArticle/ShowCompleteArticle.jsx";
import ProtectedRoute from "./Components/protectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/create-post",
        element: <ProtectedRoute element={CreatePost} />,
      },
      // { path: "/create-post", element: <CreatePost /> },
      { path: "/technology-news", element: <TechnologyNews /> },
      { path: "/general-news", element: <GeneralNews /> },
      { path: "/politics-news", element: <PoliticsNews /> },
      { path: "/user/login", element: <Login /> },
      { path: "/user/singup", element: <Singup /> },
      { path: "/article/posts/:id", element: <ShowcompleteArticle /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
