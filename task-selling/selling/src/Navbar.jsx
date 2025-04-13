import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <img src="/src/assets/navbarlogo.jpg" alt="" />
          </div>
          <div className="nav-items">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About Us</a>
            <a href="#">Special</a>
            <a href="#">Testimonials</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
