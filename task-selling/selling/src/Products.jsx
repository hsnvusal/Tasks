import React from "react";
import "./Products.css"

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products_main">
          <div className="products_text">
            <h3>POPULAR PRODUCTS</h3>
            <h1>Our Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
          <div className="products_items">
            <div className="products-item">
                <img src="/src/assets/product-card1.webp" alt="" />
                <div className="products-item-text">
                    <h3>Wild West Hoodie</h3>
                    <div className="products-icons">
                        <p>
                        <i class="fa-solid fa-star"></i>
                        5.0
                        </p>
                    </div>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
