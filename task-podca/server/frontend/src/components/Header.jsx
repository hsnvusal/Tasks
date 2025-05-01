import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.navbar}>
          <div className={styles.navbar_items}>
            <a href="#">Home</a>
            <a href="#">Domain</a>
            <a href="#">
              Hosting <i class="fa-solid fa-arrow-down"></i>
            </a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className={styles.navbar_buttons}>
            <a href="#" className={classNames(styles.btn,styles.first)}>Register</a>
            <a href="#" className={classNames(styles.btn,styles.second)}>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
