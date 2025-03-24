import React from "react";
import "./MainHeader.css";

const MainHeader = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>PARAMAARDHA</h1>
        <span className="mini-heading">Vedic Service Platform</span>
        <p>
            From expert-led sacred Homas and Yagnas to <br />
            personalized pujas and spiritual consultations.</p>
        <div className="hero-buttons">
          <button className="btn primary">Book a Service</button>
          <button className="btn primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
