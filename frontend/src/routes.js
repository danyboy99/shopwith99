import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./Screens/homescreen.js";
import ProductScreen from "./Screens/productscreen.js";
//import SampleScreen from "./Screens/samplescreen.js";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/product/:slug",
    element: <ProductScreen />,
  },
]);

export default routes;
