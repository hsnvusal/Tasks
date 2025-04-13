import React from "react";
import "./Top_Nav.css";



const Top_nav = () => {
  return (
    <div className="top_nav">
      <div className="container">
        <div className="top_nav_main">
          <div className="top_icons">
            <a href="#">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="top_text">
            <div className="top_text_number">
              <a href="#"><i class="fa-solid fa-phone"></i></a>
              <p>(+1) 234 5678 9101</p>
            </div>
            <div className="top_text_number">
              <a href="#"><i class="fa-solid fa-envelope"></i></a>
              <p>shop@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_nav;
