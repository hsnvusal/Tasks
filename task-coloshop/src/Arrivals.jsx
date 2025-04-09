import React from 'react';
import "./Arrival.css";



const Arrivals = ({arrivals}) => {
  return (
    <div className="camera-grid">
      {arrivals.map((arrival, index) => (
        <div key={index} className="camera-card">
          <img
            src={arrival.image}
            alt={arrival.name}
            className="camera-image"
          />
          <h2 className="camera-title">{arrival.title}</h2>
          
          <p className="camera-price"> {arrival.price} $</p>
        </div>
      ))}
    </div>
  )
}

export default Arrivals