import React from "react";
import "./About.css";
import aboutus from "../assets/aboutus-img.svg";
import teamLogo1 from "../assets/team-01.jpg";
import teamLogo2 from "../assets/team-02.jpg";
import teamLogo3 from "../assets/team-03.jpg";

const About = () => {
  return (
    <div className="all-about">
      <div className="about">
        <div className="container">
          <div className="aboutus">
            <div className="aboutus-text">
              <h1>About Us</h1>
              <p>
                Vector illustration credit goes to FreePik website. Purple Buzz
                is provided by TemplateMo. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
            </div>
            <div className="aboutus-img">
              <img src={aboutus} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="team">
          <div className="team-cards">
            <div className="team-card">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="team-card-items">
              <div className="team-card-item">
                <img src={teamLogo1} alt="" />
                <div className="team-card-item-text">
                  <h4>John Doe</h4>
                  <h4>Business Development</h4>
                </div>
              </div>
              <div className="team-card-item">
                <img src={teamLogo2} alt="" />
                <div className="team-card-item-text">
                  <h4>Jane Doe</h4>
                  <h4>Media Development</h4>
                </div>
              </div>
              <div className="team-card-item">
                <img src={teamLogo3} alt="" />
                <div className="team-card-item-text">
                  <h4>Sam</h4>
                  <h4>Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner">
        <div className="container">
          <div className="partner-text">
            <h1>Our Partner</h1>
          </div>
          <div className="partner-cards">
            <div className="partner-card">
              <div className="partner-card-icon">
                <a href="#">
                  <i class="fa-solid fa-building"></i>
                </a>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-card-icon">
                <a href="#">
                  <i class="fa-solid fa-shield-dog"></i>
                </a>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-card-icon">
                <a href="#">
                  <i class="fa-solid fa-circle-xmark"></i>
                </a>
              </div>
            </div>
            <div className="partner-card">
              <div className="partner-card-icon">
                <a href="#">
                  <i class="fa-solid fa-spa"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
