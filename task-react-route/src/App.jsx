import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import FavoritesPage from "./components/FavoritePage";
import BasketPage from "./components/BasketPage";

const App = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/">Məhsullar</Link>
        <Link to="/favorites">Favorilər</Link>
        <Link to="/basket">Səbət</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
};

export default App;
