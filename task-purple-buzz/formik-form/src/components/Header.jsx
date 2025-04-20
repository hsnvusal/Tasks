import React from "react";
import { Link } from "react-router";
import Logo from "../assets/logo.png";
import "../components/Header.css";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="nav-main">
            <div className="nav-img">
              <img src={Logo} alt="" />
            </div>
            <div className="nav-items">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/work">
                Work
              </Link>
              <Link className="link" to="/pricing">
                Pricing
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </div>
            <div className="nav-icons">
              <i className="fa-solid fa-bell"></i>
              <i className="fa-solid fa-gear"></i>
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="hamburger-menu">
                <i class="fa-solid fa-bars"></i>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
