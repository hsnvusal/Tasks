import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header_body}>
          <div className={styles.header_body_text}>PIXOVA LITE</div>
          <div className={styles.header_body_listsHam}>
            <div className={styles.header_body_lists}>
              <a href="#">About</a>
              <a href="#">Recent Works</a>
              <a href="#">Testimonials</a>
              <a href="#">About</a>
              <a href="#">Team</a>
              <a href="#">News</a>
              <a href="#">Contact</a>
            </div>
            <div className={styles.header_body_hamburger}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
