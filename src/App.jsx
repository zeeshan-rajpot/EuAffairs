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
      path: "/Payment",
      element: <Payment />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
