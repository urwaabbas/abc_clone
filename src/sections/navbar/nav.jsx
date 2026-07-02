import React from "react";
import "./nav.css";
import logoEnside from "../../assets/logoEnside.png";
import facebook from "../../assets/facebook.jpg";
import pinterest_logo from "../../assets/pinterest_logo.png";
import xlogo from "../../assets/xlogo.jpg";

const Navbar = () => {
  return (
    <div className="the-whole-menu">
      {/* Top bar */}
      <div className="side_by_side_top_card">
        <div className="top-bar-inner">
          <div className="top_nav_card">
            <div className="sales_card">Sales Department : 3242352</div>
            <div className="mail_card">Mail : abc@example.com</div>
          </div>
          <div className="otherlinks_card">
            <img src={facebook} alt="Facebook" />
            <img src={pinterest_logo} alt="Pinterest" />
            <img src={xlogo} alt="X" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="menu-attached-with-content">
        <div className="nav-inner">
          <img id="logo" src={logoEnside} alt="Logo" />

          <ul>
            <li>
              <a href="#about" className="navlinks">About</a>
            </li>
            <li>
              <a href="#features" className="navlinks">Features</a>
            </li>
            <li>
              <a href="#services" className="navlinks">Services</a>
            </li>
            <li>
              <a href="#cases" className="navlinks">Cases</a>
            </li>
            <li>
              <a href="#contact" className="navlinks">Contact</a>
            </li>
            <li>
              <button className="navlinks">Purchase</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
