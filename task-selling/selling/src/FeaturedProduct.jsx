import React from "react";
import styles from './FeaturedProduct.module.css';

const FeaturedProduct = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.topText}>
        <p className={styles.smallTitle}>AWESOME PRODUCTS</p>
        <h2 className={styles.mainTitle}>Featured Products</h2>
        <p className={styles.topDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
        </p>
      </div>

      <div className={styles.productWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
            alt="Product"
            className={styles.productImage}
          />
        </div>
        <div className={styles.content}>
          <h3>About This Product</h3>
          <p>
            Et tempora id nostrum saepe amet doloribus deserunt <br />
            totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione <br />
            odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
          </p>
          <div className={styles.price}>
            <span className={styles.oldPrice}>$269.00</span>
            <span className={styles.newPrice}>$69.00</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btnOutline}>VIEW DETAILS</button>
            <button className={styles.btnFilled}>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className={`${styles.productWrapper} ${styles.reverse}`}>
        <div className={styles.imageWrapper}>
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg
"
            alt="Product"
            className={styles.productImage}
          />
        </div>
        <div className={styles.content}>
          <h3>About This Product</h3>
          <p>
            Et tempora id nostrum saepe amet doloribus deserunt <br />
            totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione <br />
            odio iure blanditiis earum fuga molestiae alias dicta perferendis inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
          </p>
          <div className={styles.price}>
            <span className={styles.oldPrice}>$269.00</span>
            <span className={styles.newPrice}>$69.00</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.btnOutline}>VIEW DETAILS</button>
            <button className={styles.btnFilled}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
