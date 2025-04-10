import React from "react";
import "./LatestBlogs.css";
import img1 from "../src/assets/blog1.webp";
import img2 from "../src/assets/blog2.webp";
import img3 from "../src/assets/blog3.webp";

const LatestBlogs = () => {
  return (
    <div className="latest-blogs-container">
      <h2 className="latest-title">Latest Blogs</h2>
      <div className="blogs-grid">
        <img src={img1} alt="Blog 1" />
        <img src={img2} alt="Blog 2" />
        <img src={img3} alt="Blog 3" />
      </div>

      <div className="newsletter">
        <div className="container newletter-box">
          <div className="newsletter-text">
            <h3>Newsletter</h3>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div className="newsletter-input">
            <input type="email" placeholder="Your email" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <a href="/">Blog</a>
          <a href="/">FAQs</a>
          <a href="/">Contact us</a>
        </div>
        <p className="footer-note">
          ©2018 All Rights Reserved. This template is made with ❤️ by{" "}
          <a href="https://colorlib.com">Colorlib</a>
        </p>
        <div className="footer-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-skype"></i>
          <i className="fab fa-pinterest"></i>
        </div>
      </footer>
    </div>
  );
};

export default LatestBlogs;
