import React from "react";
import styles from "./Footer.module.css";
import icon from "../../assets/footer-icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_body}>
          <div className={styles.footer_body_item}>
            <div className={styles.emailCont}>
              <img src={icon} alt="" />
              <div className={styles.email}>
                <input type="text" />
                <button>Send</button>
              </div>
            </div>
          </div>
          <div className={styles.footer_body_item}>
            <h3>About</h3>
            <ul>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Our Services</li>
            </ul>
          </div>
          <div className={styles.footer_body_item}>
            <h3>About</h3>
            <ul>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Our Services</li>
            </ul>
          </div>
          <div className={styles.footer_body_item}>
            <h3>About</h3>
            <ul>
                <li>About Us</li>
                <li>Our Partners</li>
                <li>Our Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
