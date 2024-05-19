import React from "react";
import "./Hero.css";
import heroImg from "../../../assets/hero-img.webp";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>
          Your Journey <br />
          <span>Matters</span>
        </h1>
        <p>
          Our website is a place to share educational journeys, inspiring
          others. Explore stories, share your own, and be part of our supportive
          community.
        </p>
        <div className="hero-btns">
          <button className="btn signIn-btn hero-btn">Read Journeys</button>
          <button className="btn  signUp-btn hero-btn">Get Started</button>
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;
