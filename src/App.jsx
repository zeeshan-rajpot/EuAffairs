import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";

import "./App.css";
import Detail from "./Pages/Blog";
import Categories from "./Pages/CatogeriesDetail";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },    {
      path: "/BlogDetail",
      element: <Detail />,
    },   {
      path: "/CategoriesDetail/:title/:text",
      element: <Categories />,
    },
    // {
    //   path: "/takeTest",
    //   element: <TakeTest />,
    // },
    // {
    //   path: "/Payment",
    //   element: <Payment />,
    // },


  ]);

  return <RouterProvider router={router} />;
}

export default App;