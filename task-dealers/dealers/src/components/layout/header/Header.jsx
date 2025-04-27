import React from "react";
import logo from "../../../assets/header-logo.png";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className={styles.header_items}>
          <a href="#">Collection</a>
          <a href="#">Shop</a>
          <a href="#">Catalogs</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.header_icons}>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
          <a href="#">
            <i className="fa-regular fa-heart"></i>
          </a>
          <a href="#">
            <i className="fa-solid fa-bag-shopping"></i>
          </a>
        </div>
        <a href="#" className={styles.hamburger_menu}>
          <i class="fa-solid fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
