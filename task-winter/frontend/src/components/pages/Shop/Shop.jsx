import React from 'react'
import styles from "./Shop.module.css"

const Shop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.shop_cards}>
            <div className={styles.shop_card}>
                <img src="https://preview.colorlib.com/theme/winter/img/feature_1.png" alt="" />
                <div className={styles.shop_card_text}>
                    <a href="#">Shop for male</a>
                </div>
            </div>
            <div className={styles.shop_card}>
                <img src="https://preview.colorlib.com/theme/winter/img/feature_2.png" alt="" />
                <div className={styles.shop_card_text}>
                    <a href="#">Shop for male</a>
                </div>
            </div>
            <div className={styles.shop_card}>
                <img src="https://preview.colorlib.com/theme/winter/img/feature_3.png" alt="" />
                <div className={styles.shop_card_text}>
                    <a href="#">Shop for male</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop