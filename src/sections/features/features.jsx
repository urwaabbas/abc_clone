
import React from "react";
import ddIcon from "../../assets/dd-icon.png";
import design from "../../assets/design.png";
import featuresIcon from "../../assets/features.png";
import fastIcon from "../../assets/fast-icon.png";
import happyPeople from "../../assets/happy-people.jpg";
import buildDream from "../../assets/build-dream.jpg";
import bgImgLive from "../../assets/live-customizer-img.jpg";
import "./features.css";

const Features = () => {
  return (
    <>
    <section id="features"></section>
      {/* Other Features Section */}
      <div className="features-section">
        <div className="features-header">
          <h2 className="features-title">Other Features</h2>
          <p className="features-subtitle">Discover more of what we offer</p>
          <div className="blue-line"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <img src={ddIcon} alt="Design & Developing" className="feature-icon" />
            <h3 className="feature-title">Design & Developing</h3>
            <p className="feature-description">
              Creative concept – every solution needs a conceptual design that the further work will be based on.
            </p>
          </div>

          <div className="feature-card">
            <img src={design} alt="Fully Responsive" className="feature-icon" />
            <h3 className="feature-title">Fully Responsive</h3>
            <p className="feature-description">
              We are always taking care of the new product’s launch and initial client and user support.
            </p>
          </div>

          <div className="feature-card">
            <img src={fastIcon} alt="Fast Support" className="feature-icon" />
            <h3 className="feature-title">Fast Support</h3>
            <p className="feature-description">
              Our team ensures quick assistance and reliable solutions whenever you need help.
            </p>
          </div>

          <div className="feature-card">
            <img src={featuresIcon} alt="Live Customizer" className="feature-icon" />
            <h3 className="feature-title">Live Customizer</h3>
            <p className="feature-description">
              Customize your experience in real-time with our integrated tools.
            </p>
          </div>
        </div>

        <div className="features-images">
          <img src={happyPeople} alt="Happy People" className="feature-image" />
          <img src={buildDream} alt="Build Your Dream" className="feature-image" />
        </div>
      </div>

      {/* Live Customizer Section */}
      <section
        className="live-customizer"
        style={{ backgroundImage: `url(${bgImgLive})` }}
      >
        <div className="overlay">
          <h2 className="live-title">Live Customizer</h2>
          <p className="live-subtitle">
            Customize your experience in real-time with our integrated tools
          </p>
          <button className="live-btn"> ▷ Presentation</button>
        </div>

        <div className="scroll-down">
          <span></span>
        </div>
      </section>
      

    </>
  );
};

export default Features;
