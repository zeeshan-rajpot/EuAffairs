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
import Overview from "./Pages/Admin/Overview/Overview";
import Users from "./Pages/Admin/Users/Users";
import Reoprt from "./Pages/Admin/Report/Reoprt";
import Article from "./Pages/Article/Article";
import NewsFlash from "./Pages/Admin/NewsFlash/NewsFlash";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/BlogDetail",
      element: <Detail />,
    },
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
      path: "/overview",
      element: <Overview />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/report",
      element: <Reoprt />,
    },
    {
      path: "/article",
      element: <Article />,
    },
    {
      path: "/newsFlash",
      element: <NewsFlash />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
