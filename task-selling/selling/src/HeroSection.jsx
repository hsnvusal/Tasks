import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h1 className={styles.title}>Shop With Us</h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br />
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <div className={styles.buttons}>
            <button className={styles.shopBtn}>SHOP NOW</button>
            <button className={styles.clubBtn}>CLUB MEMBERSHIP</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
