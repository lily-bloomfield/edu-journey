import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img />
        <h2>EduJourney</h2>
        <ul>
          <li>
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/publicjourneys" className="nav-link">
              Public Journeys
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/yourjourneys" className="nav-link">
              Your Journeys
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="signIn-btn">Sign In</button>
        <button className="signUp-btn">Sign Up</button>
      </div>
    </nav>
  );
}
export default Navbar;
