import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BestSellers.css";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="container">
    <div className="best-sellers-section">
      <h2 className="section-title">Best Sellers</h2>
      <div className="best-grid">
        {products.map((product, index) => (
          <div key={index} className="best-card">
            <img src={product.image} alt={product.title} className="best-image" />
            <h3 className="best-title">{product.title}</h3>
            <p className="best-price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BestSellers;
