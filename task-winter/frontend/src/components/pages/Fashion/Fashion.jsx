import React from 'react'
import styles from "./Fashion.module.css"
const Fashion = () => {
  return (
    <div className={styles.fashion}>
        <div className="container">
            <div className={styles.fashion_body}>
                <h3>Winter Fashion</h3>
                <h1>Fashion <br /> Collection 2019</h1>
                <button>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Fashion