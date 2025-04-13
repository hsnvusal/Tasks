import React from 'react';
import styles from './SummerSale.module.css';

const SummerSale = () => {
  return (
    <section className={styles.summerSale}>
      <div className={styles.overlay}>
        <h4 className={styles.subtitle}>SPECIAL PROMO</h4>
        <h1 className={styles.title}>Summer Sale</h1>
        <p className={styles.description}>
          Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.
        </p>
        <div className={styles.timer}>
          {['weeks', 'days', 'hr', 'min', 'sec'].map((unit, index) => (
            <div key={index} className={styles.timerBox}>
              <span>00</span>
              <small>{unit}</small>
            </div>
          ))}
        </div>
        <button className={styles.shopButton}>SHOP NOW</button>
      </div>
    </section>
  );
};

export default SummerSale;
