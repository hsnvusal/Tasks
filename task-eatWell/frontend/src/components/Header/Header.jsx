import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.header_main_title}>
            <a href="/">
              <h1>EATWELL</h1>
            </a>
          </div>
          <div className={styles.header_main_items}>
            <a href="/">Home</a>
            <a href="/admin">Admin</a>
            <a href="/basket">Basket</a>
            <a href="#">About</a>
            <a href="#">Offer</a>
            <a href="#">Menu</a>
            <a href="#">News</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.hamburger}>
            <i className="fa-solid fa-bars"></i>
            <a href="#">Home</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
