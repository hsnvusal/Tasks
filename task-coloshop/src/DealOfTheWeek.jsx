import React from "react";
import "./DealOfTheWeek.css";
import img from "./assets/deal_ofthe_week.png.webp"

const DealOfTheWeek = () => {
  return (
    <section className="deal-section">
      <div className="deal-container">
        
        <img src={img} alt="" />
        <div className="deal-right">
          <h2 className="deal-title">Deal Of The Week</h2>
          <div className="deal-timer">
            <div className="time-box">
              <span className="time-value">2</span>
              <span className="time-label">Day</span>
            </div>
            <div className="time-box">
              <span className="time-value">22</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-box">
              <span className="time-value">42</span>
              <span className="time-label">Mins</span>
            </div>
            <div className="time-box">
              <span className="time-value">56</span>
              <span className="time-label">Sec</span>
            </div>
          </div>
          <button className="deal-button">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheWeek;
