import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import "./App.css";
import Detail from "./Pages/Blog";
import Categories from "./Pages/CatogeriesDetail";
import CustmerProfile from "./Pages/Custmer/CustmerProfile";
import News from "./Pages/Custmer/News/News";
import RequestList from "./Pages/Custmer/Request/Request";
import Saved from "./Pages/Custmer/Saved/Saved";
import Tilored from "./Pages/Custmer/Tilored/Tilored";

import Payment from "./Pages/Payment/Payment";
import ReportsDetail from "./Pages/Custmer/ReportsDetail/ReportsDetail";
import ArticleDetail from "./Pages/Custmer/ArticleDetail/ArticleDetail";

import { ArticlesProvider } from "./Pages/Custmer/ArticlesContext";
import BlogsDashbord from "./Pages/Custmer/BlogsDashbord/blogsDashbord";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./Pages/Terms/Terms";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Blog/:heading/:blogDescription/:thumbnail/:category/:updatedAt",
      element: <Detail />,
    },

    // to={`/BlogDetail/${article.thumbnail}/${article.thumbnail}/${article.blogDescription}/${article.category}/${article.updatedAt}/${article.title}`}

    {
      path: "/CategoriesDetail/:title/:text",
      element: <Categories />,
    },
    {
      path: "/CustmerProfile",
      element: <CustmerProfile />,
    },
    {
      path: "/News",
      element: <News />,
    },
    {
      path: "/Request",
      element: <RequestList />,
    },
    {
      path: "/Saved",
      element: <Saved />,
    },
    {
      path: "/Tilored",
      element: <Tilored />,
    },
    {
      path: "/Payment",
      element: <Payment />,
    },
    {
      path: "/ReportsDetail/:heading/:createdAt/:category/:reportDescription/:id",
      element: <ReportsDetail />,
    },
    {
      path: "/ArticleDetail/:heading/:createdAt/:category/:reportDescription/:image/:id",
      element: <ArticleDetail />,
    },   
     {
      path: "BlogDashbord",
      element: <BlogsDashbord />,
    }, 
    {
      path: "/PrivacyPolicy",
      element: <PrivacyPolicy />,
    }, {
      path: "/Terms",
      element: <Terms />,
    },
  ]);



return (
  <ArticlesProvider>
    <RouterProvider router={router} />
  </ArticlesProvider>
);
}
export default App;
