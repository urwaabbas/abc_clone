import React from "react";
import concept1 from "../../assets/brand-development.png";
import concept2 from "../../assets/man_walking.jpg";
import concept3 from "../../assets/opening-world.jpg";
import concept4 from "../../assets/woman_calling.jpg";
import concept5 from "../../assets/happy-people.jpg";
import "./concepts.css";

const Concepts = () => {
  const concepts = [
    {
      img: concept1,
      title: "Creative Design",
      desc: "Innovative layouts and modern aesthetics for your brand.",
      btn: "Explore More",
    },
    {
      img: concept2,
      title: "Responsive Layout",
      desc: "Optimized for all devices, ensuring seamless experiences.",
      btn: "View Details",
    },
    {
      img: concept3,
      title: "Fast Performance",
      desc: "Lightning‑fast load times with optimized code.",
      btn: "Learn More",
    },
    {
      img: concept4,
      title: "Custom Solutions",
      desc: "Tailored features to meet your unique needs.",
      btn: "Discover",
    },
    {
      img: concept5,
      title: "Trusted Support",
      desc: "Reliable assistance whenever you need it.",
      btn: "Contact Us",
    },
  ];

  return (
    <section className="concepts">
      <div className="concepts-grid">
        {concepts.map((item, index) => (
          <div className="concept-card" key={index}>
            <img src={item.img} alt={item.title} className="concept-img" />
            <div className="concept-overlay">
              <h3>{item.title}</h3>
              <div className="text-div">
                <p>{item.desc}</p>
              </div>
              <button>{item.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Concepts;
