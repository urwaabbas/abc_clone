import React from "react";
import "./nav.css" ;
import logoEnside from "../../assets/logoEnside.png";
import facebook from "../../assets/facebook.jpg";
import pinterest_logo from "../../assets/pinterest_logo.png";
import xlogo from "../../assets/xlogo.jpg";



const Navbar = () => {
  return (
    <div className="the-whole-menu">
      <div className="side_by_side_top_card">
        <div className="top_nav_card">
          <div className="sales_card">Sales Department : 3242352</div>
          <div className="mail_card">Mail : abc@gmail.com</div>
        </div>
        <div className="otherlinks_card">
          Purchase
          <img id="facebook" src={facebook} alt="facebook" />
          <img id="twitter" src={xlogo} alt="x" />
          <img id="pinterest" src={pinterest_logo} alt="P" />
        </div>
      </div>

      <div className=" menu-attached-with-content">
        <img id="logo" src={logoEnside} alt="Enside Logo" />

        <ul>
          <li>
            <a href="#about" className="navlinks">
              About
            </a>
          </li>
          <li>
            <a href="#cases" className="navlinks">
              Cases
            </a>
          </li>
          <li>
            <a href="#testinomials" className="navlinks">
              Testinomials
            </a>
          </li>
          <li>
            <a href="#features" className="navlinks">
              Features
            </a>
          </li>
          <li>
            <a href="#contact" className="navlinks">
              Contact
            </a>
          </li>

          <li>
            <button className="navlinks">Purchase</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
