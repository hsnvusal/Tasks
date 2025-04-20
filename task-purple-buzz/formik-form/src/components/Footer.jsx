import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-first">
          <div className="footer-items">
            <div className="footer-item">
              <div className="footer-item-title">
                <i class="fa-regular fa-building"></i>
                <h4>Purple Buzz</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <div className="footer-icons">
                <a href="#">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-whatsapp"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-flickr"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-whatsapp"></i>
                </a>
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-item-title">
                <h4>Our Company</h4>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Home</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">About Us</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Work</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Price</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Contact</a>
                </a>
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-item-title">
                <h4>Our Works</h4>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Branding</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Business</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Marketing</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Social Media</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Digital Solution</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                  <i class="fa-solid fa-chevron-right"></i>
                  <a href="#">Graphic</a>
                </a>
              </div>
            </div>
            <div className="footer-item">
              <div className="footer-item-title">
                <h4>For Client</h4>
              </div>
              <div className="footer-links">
                <a href="#" className="footer-links-tutucu">
                    <i class="fa-solid fa-phone"></i>
                  <a href="#">010-020-0340</a>
                </a>
                <a href="#" className="footer-links-tutucu">
                <i class="fa-solid fa-envelope-circle-check"></i>
                  <a href="#">info@company.com</a>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="footer-second">
            <div className="container">
                <div className="footer-second-body">
                    <p>© Copyright 2021 Purple Buzz Company. All Rights Reserved.</p>
                    <div className="footer-second-body-by">
                        <p>Designed by TempalteMo</p>
                        <p>Distributed by ThemeWagon</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
