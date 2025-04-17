import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout"; 
import ProductList from "./components/ProductList";
import FavoritesPage from "./components/FavoritePage";
import BasketPage from "./components/BasketPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "basket",
        element: <BasketPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
