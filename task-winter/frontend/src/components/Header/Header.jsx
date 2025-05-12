import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png.webp";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="containerf">
        <div className={styles.header_body}>
          <div className={styles.header_body_logo}>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className={styles.header_body_items}>
            <a href="/">Home</a>
            <a href="/basket">Basket</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/admin">Admin</a>
            <a href="/contact">Contact</a>
          </div>
          <div className={styles.header_body_icons}>
          <i class="fa-solid fa-bag-shopping"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={styles.header_body_hamburger}>
          <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
