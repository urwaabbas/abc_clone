import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Built By <span className="highlight">URWA ABBAS</span></p>
      </div>
    </footer>
  );
};

export default Footer;
