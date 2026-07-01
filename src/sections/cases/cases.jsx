import React from "react";
import brandDevImg from "../../assets/brand-development.png";
import contentStrategyImg from "../../assets/content-strategy.png";
import techImg from "../../assets/technology.png";
import "./cases.css";


const Cases = () => {

  return (
    <>
    <section id="cases"></section>
    <div className="cases-header">
      <h2 className="cases-title">Our Cases</h2>
      <p className="cases-subtitle">Solutions</p>
      <div className="blue-line"></div>
    </div>
    <div className="main-div">
      <div className="brand-div">
        <img id="first-img" src={brandDevImg} alt="img" />
        <h2 className="title-brand-div">Brand Development</h2>
        <p className="description-first-div">
          Our energy and expertise are focus in inspiring projects, activation
          campaigns and influence strategies with our brands
        </p>
      </div>

      <div className="content-div">
        <img id="second-img" src={contentStrategyImg} alt="img" />
        <h2 className="title-content-div">Content Strategy</h2>
        <p className="description-second-div">
          We believe in a collaborative partnership where we work with you and
          your brand to create the perfect solution
        </p>
      </div>

      <div className="ecom-div">
        <img src={techImg} alt="img" id="third-img" />
        <h2 className="title-tech-div">Ecommerce & Technology</h2>
        <p className="description-third-div">
          Development and Design – every solution needs a conceptual design that
          the further work will be based on.
        </p>
      </div>
    </div>
    </>
    );
  
};

export default Cases;
