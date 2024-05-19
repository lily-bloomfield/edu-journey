import React from "react";
import "./Footer.css";
import logo from "../../assets/journey-logo.svg";
const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} className="logo" />
          <p>© 2024 EduJourney, All rights reserved.</p>
        </div>

        <div className="footer-right">
          <ul>
            <li>
              <b>LEGAL</b>
            </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>
              <b>WEBSITE</b>
            </li>
            <li>Dashboard</li>
            <li>Your Journeys</li>
            <li>Write Journeys</li>
            <li>Public Journeys</li>
          </ul>
          <ul>
            <li>
              <b>GET IN TOUCH</b>
            </li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
