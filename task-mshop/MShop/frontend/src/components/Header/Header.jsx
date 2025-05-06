import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png.webp";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_main}>
          <div className={styles.header_main_logo}>
            <a href="/">
            <img src={logo} alt="" />
            </a>
          </div>
          <div className={styles.header_main_items}>
            <a href="/admin">Admin Panel</a>
            <a href="/basket">Basket</a>
            <a href="/wishlist">Wishlist</a>
            <a href="/">HOME</a>
            <a href="#">CATEGORY</a>
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">LATEST</a>
            <a href="#">PAGES</a>
            
          </div>
          <div className={styles.hamburger}>
              <i className="fa-solid fa-bars"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
