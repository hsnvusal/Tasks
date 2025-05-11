import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container-fluid">
        <div className={styles.header_body}>
          <div className={styles.header_body_title}>
            <a href="/">
              <h3>Floral Studio</h3>
            </a>
          </div>
          <div className={styles.header_body_items}>
            <a href="/">Home</a>
            <a href="/admin">Admin</a>
            <a href="/basket">Basket</a>
            <a href="#">About Us</a>
            <a href="#">Portfolio</a>
            <a href="#">Pricing</a>
            <a href="#">Contacts</a>
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
