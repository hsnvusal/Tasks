import React from "react";
import "./Category.css";
import img1 from "../src/assets/category1.webp"
import img2 from "../src/assets/category2.webp"
import img3 from "../src/assets/category3.webp"


const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="category-grid">
          <div className="category-card">
            <img
              src={img1}
              alt="Women's"
              className="category-image"
            />
            <div className="category-label">WOMEN'S</div>
          </div>
          <div className="category-card">
            <img
              src={img2}
              alt="Accessories"
              className="category-image"
            />
            <div className="category-label">ACCESSORIES'S</div>
          </div>
          <div className="category-card">
            <img
              src={img3}
              alt="Men's"
              className="category-image"
            />
            <div className="category-label">MEN'S</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;