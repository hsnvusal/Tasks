import React from "react";
import Form from "../components/Form";
import Logo from "../assets/banner-img-01.svg";
import card1 from "../assets/card1.png";
// import card2 from "../assets/card2.png";
// import card3 from "../assets/card3.png";
import "../pages/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-title">
          <div className="contact-title-text">
            <h1>Contact</h1>
            <h3>Elit, sed do eiusmod tempor</h3>
            <p>
              Vector illustration is from StorySet. Incididunt ut labore et
              dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="contact-title-img">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form-text">
            <h1>Create success campaign with us!</h1>
            <h3>Elit, sed do eiusmod tempor</h3>
            <p>
              Incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis. Laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate.
            </p>
          </div>
          <div className="contact-form-body">
            <div className="contact-form-body-text">
              <div className="contact-card">
                <div className="contact-card-img">
                  <img src={card1}alt="" />
                </div>
                <div className="contact-card-text">
                  <h4>Media Contact</h4>
                  <p>Mr.John Doe</p>
                  <p>010-020-03-40</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-img">
                  <img src={card1}alt="" />
                </div>
                <div className="contact-card-text">
                  <h4>Media Contact</h4>
                  <p>Mr.John Doe</p>
                  <p>010-020-03-40</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-img">
                  <img src={card1}alt="" />
                </div>
                <div className="contact-card-text">
                  <h4>Media Contact</h4>
                  <p>Mr.John Doe</p>
                  <p>010-020-03-40</p>
                </div>
              </div>
            </div>
            <div className="contact-form-main">
              <Form/>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Form/>
  );
};

export default Contact;
