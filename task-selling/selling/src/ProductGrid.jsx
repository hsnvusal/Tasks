import React from "react";
import styles from "./ProductGrid.module.css";

const products = [
  {
    title: "Wild West Hoodie",
    rating: 5.0,
    reviews: 29,
    description: "Lorem ipsum dolor sit amet, consectetur  adipisicing.  ",
    image: "https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg",
  },
  {
    title: "Wild West Hoodie",
    rating: 4.8,
    reviews: 18,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    image: "https://preview.colorlib.com/theme/selling/images/model_2_bg.jpg",
  },
  {
    title: "Wild West Hoodie",
    rating: 5.0,
    reviews: 22,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    image: "https://preview.colorlib.com/theme/selling/images/model_3_bg.jpg",
  },
  {
    title: "Wild West Hoodie",
    rating: 4.9,
    reviews: 31,
    description: "Lorem ipsum dolor sit amet, consectetur  adipisicing.",
    image: "https://preview.colorlib.com/theme/selling/images/model_4_bg.jpg",
  },
  {
    title: "Wild West Hoodie",
    rating: 5.0,
    reviews: 25,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    image: "	https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg",
  },
  {
    title: "Wild West Hoodie",
    rating: 4.7,
    reviews: 20,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    image: "https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg",
  },
];

const ProductGrid = () => {
  return (
    <div className={styles.wrapper}>
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.subtitle}>POPULAR PRODUCTS</p>
        <h2 className={styles.title}>Our Products</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br /> nostrum natus
          excepturi fuga ullam accusantium vel ut eveniet aut <br /> consequatur laboriosam ipsam.
        </p>
      </div>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
  <img className={styles.image} src={product.image} alt={product.title} />
  <div className={styles.imageBorder}></div>
</div>

            <h3 className={styles.cardTitle}>{product.title}</h3>
            <div className={styles.rating}>
              <span>⭐{product.rating}</span>
              <span>🤍</span>
              <span>{product.reviews}</span>
            </div>
            <p className={styles.cardDescription}>{product.description}</p>
            <div className={styles.buttons}>
              <button className={styles.cartButton}>CART</button>
              <button className={styles.viewButton}>VIEW</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProductGrid;

