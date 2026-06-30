import React from "react";
import "./services.css";

import featuresIcon from "../../assets/features.png";
import performanceIcon from "../../assets/performance.png";
import designIcon from "../../assets/design.png";
import paralaxIcon from "../../assets/paralax.png";

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
    <section className="services-section">
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
    </section>
  );
};

export default Services;