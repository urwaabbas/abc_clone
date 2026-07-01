import React from "react";
import "./services.css";

import featuresIcon from "../../assets/features.png";
import performanceIcon from "../../assets/performance.png";
import designIcon from "../../assets/design.png";
import paralaxIcon from "../../assets/paralax.png";
import openingworld from "../../assets/opening-world.jpg";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      image: paralaxIcon, // Using imported image asset
      title: "Parallax Section",
      description:
        "This is how we can be sure that your brand expands according to market goals",
    },
    {
      id: 2,
      image: designIcon,
      title: "Responsive Design",
      description:
        "It is fundamental to have a strategy that takes into consideration the features",
    },

    {
      id: 3,
      image: performanceIcon,
      title: "Optimized Performance",
      description:
        "This is how we can be sure that your brand expands according to market goals",
    },
    {
      id: 4,
      image: featuresIcon,
      title: "Featured On Envato",
      description:
        "It is fundamental to have a strategy that takes into consideration the features",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="main-header">
        <h2 className="header-title">Services</h2>
        <span className="subtitle"> HOW CAN WE HELP</span>
        <div className="services-blueline"></div>
      </div>

      <div className="services-columns-container">
        {servicesData.map((item) => (
          <div className="service-feature-card" key={item.id}>
            <div className="service-image-ring">
              <img src={item.image} alt={item.title} />
            </div>
            <h3 className="service-feature-title">{item.title}</h3>
            <p className="service-feature-description">{item.description}</p>
          </div>
        ))}
      </div>

      <div
        className="img-container"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 40, 110, 0.4), rgba(10, 50, 130, 0.7)), url(${openingworld})`,
        }}
      >
        <h2 className="title-container">Opening the World to Something New</h2>
      </div>
    </section>
  );
};

export default Services;
