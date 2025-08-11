import * as React from "react";
import { Analytics } from "@vercel/analytics/react"
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
import faviconUrl from "./Photos/NazarethMarketlogo.png";

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

// Ensure favicon works in production by using Vite's processed asset URL
(() => {
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    document.head.appendChild(link);
  }
  link.setAttribute('type', 'image/png');
  link.setAttribute('href', faviconUrl);
})();

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Analytics />
  </>
);