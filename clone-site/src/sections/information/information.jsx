import React from "react";
import "./information.css";
import bgImage from "../../assets/discussion.webp"; 

const InfoSection = () => {
  return (
    <div className="info-section">
      <div
        className="info-hero"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="info-overlay">
          <h2>Ready to work with us?</h2>
          <p>Let's build something amazing together.</p>
          <button className="info-btn">Get Started</button>
        </div>
      </div>


      <div className="info-details">
        <div className="info-box">
          <h3>Our Office</h3>
          <p>ML BECNH , Lahore</p>
        </div>
        <div className="info-box">
          <h3>Call Us</h3>
          <p>3242545</p>
        </div>
        <div className="info-box">
          <h3>Email Us</h3>
          <p>urwaabbas.buzdar@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
