import React from 'react'
import styles from "./Photos.module.css"

const Photos = () => {
  return (
    <div className={styles.photos}>
        <div className={styles.photos_img}>
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_1.png" alt="" />

        </div>
        <div className={styles.photos_img}>
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_2.png" alt="" />

        </div>
        <div className={styles.photos_img}>
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_3.png" alt="" />

        </div>
        <div className={styles.photos_img}>
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_4.png" alt="" />

        </div>
        <div className={styles.photos_img}>
        <img src="https://preview.colorlib.com/theme/winter/img/instagram/inst_5.png" alt="" />

        </div>
    </div>
  )
}

export default Photos