import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
        });
    }, []);

  const addToFavorites = (product) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find(p => p.id === product.id)) {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Favoriyə əlavə olundu");
    }
  };

  const addToBasket = (product) => {
    let basket = JSON.parse(localStorage.getItem("basket")) || [];
    const existing = basket.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      basket.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    alert("Səbətə əlavə olundu");
  };

  return (
    <div>
      <h2>Məhsullar</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <strong>{product.title}</strong> - ${product.price}
          <img src={product.image} alt="" style={{width:'100px'}}/>
          <div>
            <button onClick={() => addToFavorites(product)}>Favori</button>
            <button onClick={() => addToBasket(product)}>Səbət</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
