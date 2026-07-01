import React, { use } from "react";
import { useState } from "react";
import "./hero.css";

import woman_calling from "../../assets/woman_calling.jpg";
import man_walking from "../../assets/man_walking.jpg";

const Hero = () => {
  const slideData = [
    {
      image: man_walking,
      heading: "Meets Technology",
      subheading:
        "We help businesses to stay relevant to their customers in the digital era",
    },
    {
      image: woman_calling,
      heading: "Digital Innovation",
      subheading: "Creating powerful modern web experiences for global brands",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };
  const currentSlide = slideData[currentIndex];

  return (
  <section className="hero-section">
    {}
    <div className="hero-images-container">
      {slideData.map((slide, index) => (
        <img
          key={index}
          className={`hero-bg-image ${index === currentIndex ? "active" : ""}`}
          src={slide.image}
          alt={`hero-slide-${index}`}
        />
      ))}
    </div>

    <div className="hero-overlay"></div>

    <button className="arrow-btn arrow-btn-back" onClick={prevSlide}>❮</button>

    {}
    <div className="hero-content-container">
      {slideData.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-content ${index === currentIndex ? "active" : ""}`}
        >
          <h1 className="hero-title">{slide.heading}</h1>
          <h2 className="hero-title-subheading">{slide.subheading}</h2>
          <button className="discover-btn">Discover More</button>
        </div>
      ))}
    </div>

    <button className="arrow-btn arrow-btn-next" onClick={nextSlide}>❯</button>
  </section>
);
};

export default Hero;
