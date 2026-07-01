import React from "react";
import person1 from "../../assets/person-1.webp";
import person2 from "../../assets/person-2.webp";
import person3 from "../../assets/person-3.webp";
import "./testinomial.css"

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Why People Love Enside</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img src={person1} alt="Client 1" />
            <p>
              “Enside helped us launch our product seamlessly. The design and
              support were top-notch.”
            </p>
            <h4>- Donald Trump</h4>
          </div>

          <div className="testimonial-card">
            <img src={person2} alt="Client 2" />
            <p>
              “The responsive design and fast support made our digital
              transformation smooth.”
            </p>
            <h4>- Micheal Hussy</h4>
          </div>

          <div className="testimonial-card">
            <img src={person3} alt="Client 3" />
            <p>
              “Creative concepts and reliable service — Enside is our go-to
              partner.”
            </p>
            <h4>- Olivia Rod</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
