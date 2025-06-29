import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import OriginalLocation from "./OriginalLocation.jsx";
import LakeCityLocation from "./lakeCityLocation";
import Menu from "./menu";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "Lake City",
    element: <LakeCityLocation/>,
  },
  {
    path: "Martin Luther King Way",
    element: <OriginalLocation/>
  },
  {
    path: "menu",
    element: <Menu/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);