import React, { useState } from "react";
import futureImg from "../../assets/payment-plan.png";
import "./future.css";

const Future = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePoint = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const points = [
    {
      title: "Cutting-edge technology",
      desc: "Modern solutions designed to empower businesses with innovation.",
    },
    {
      title: "Reliable strategies",
      desc: "Sustainable growth plans that adapt to future challenges.",
    },
  ];

  return (
    <section className="future">
      <div className="future-container">
        {/* Left Side */}
        <div className="future-text">
          <h2>Building the Future</h2>
          <p>
            We are committed to creating innovative solutions that shape tomorrow.
          </p>

          <div className="future-points">
            {points.map((item, index) => (
              <div
                key={index}
                className={`future-point ${openIndex === index ? "open" : ""}`}
              >
                <div
                  className="future-header"
                  onClick={() => togglePoint(index)}
                >
                  <span className="plus">{openIndex === index ? "-" : "+"}</span>
                  <h4>{item.title}</h4>
                </div>
                <div
                  className="future-collapse"
                  style={{
                    maxHeight: openIndex === index ? "200px" : "0",
                    overflow: "hidden",
                  }}
                >
                  <p className="future-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="future-image">
          <img src={futureImg} alt="Future Vision" />
        </div>
      </div>
    </section>
  );
};

export default Future;
