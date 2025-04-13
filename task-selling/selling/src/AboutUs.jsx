import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg" 
          alt="Woman in office"
          className={styles.image}
        />
        <div className={styles.overlayText}>
          <h2>Trusted Merchant</h2>
          <p>FOR 50 YEARS</p>
        </div>
      </div>
      <div className={styles.textSection}>
        <span className={styles.company}>MERCHANT COMPANY</span>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Qui <br /> fuga
          ipsa, repellat blanditiis nihil, <br /> consectetur. Consequuntur eum <br />
          inventore, rem maxime, nisi <br /> excepturi ipsam libero ratione  <br />adipisci
          alias eius vero vel!
        </p>
        <button className={styles.button}>LEARN MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
