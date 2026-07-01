import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="about" className="site-footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-column">
          <h4>About Enside</h4>
          <p>
            We are the comprehensive design and technology partner for the digital age.
            Helping businesses stay relevant by touching hearts and minds.
          </p>
        </div>

        {/* Recent News */}
        <div className="footer-column">
          <h4>Recent News</h4>
          <ul>
            <li>Building a Better World with Enside</li>
            <li>Industries eCommerce Experience Launch</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li>FAQ’s</li>
            <li>Documentation</li>
            <li>Testimonials</li>
            <li>Tutorials</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-column">
          <h4>Get in Touch</h4>
          <p>Our support is available 24/7</p>
          <p>T: +1 703 4959 3452</p>
          <p>E: test@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Built By <span className="highlight">- Premium HTML Template</span> | 
          
          Powered by Enside 
        </p>
      </div>
    </footer>
  );
};

export default Footer;

