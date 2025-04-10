import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="collection">SPRING / SUMMER COLLECTION 2017</p>
          <h1 className="hero-title">
            Get up to 30% Off
            <br />
            New Arrivals
          </h1>
          <button className="shop-button">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
