import React from 'react';
import './Navbar.css'; 
import Logo from "../src/assets/logo.jpg"

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <img src={Logo} alt="" />
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">PROMOTION</a></li>
          <li><a href="#">PAGES</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <div className="nav-icons">
          <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
          <a href="#"><i class="fa-solid fa-user"></i></a>
          <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
        </ul>
        
      </div>
    </header>
  );
};

export default Navbar;
