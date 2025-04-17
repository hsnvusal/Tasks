import React from "react";
import {  Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import FavoritesPage from "./components/FavoritePage";
import BasketPage from "./components/BasketPage";
import Layout from "./components/Layout";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="basket" element={<BasketPage />} />
        </Route>
      </Routes>
  );
};

export default App;
