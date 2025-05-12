import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_body}>
        <div className={styles.footer_body_item}>
          <h4>Category</h4>
          <ul>
            <li>
              <a href="#">Male</a>
            </li>
            <li>
              <a href="#">Female</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            
          </ul>
        </div>
        <div className={styles.footer_body_item}>
          <h4>Category</h4>
          <ul>
            <li>
              <a href="#">Male</a>
            </li>
            <li>
              <a href="#">Female</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            
          </ul>
        </div>
        <div className={styles.footer_body_item}>
          <h4>Category</h4>
          <ul>
            <li>
              <a href="#">Male</a>
            </li>
            <li>
              <a href="#">Female</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            
          </ul>
        </div>
        <div className={styles.footer_body_item}>
          <h4>Newsletter</h4>
          <form action="">
            <input type="email" />
            <button>Send</button>
          </form>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Footer