import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import heroImg from "../../assets/hero-img.webp";
import Title from "../../components/Title/Title";

import HomeBody from "../../components/Home/HomeBody/HomeBody";
import Hero from "../../components/Home/Hero/Hero";
// import bodyImg2 from "../../assets/home-body-img1.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <div className="home-body">
        <Title title="Share your Journey" subTitle="It needs to be told." />
        <HomeBody />
      </div>
      <Title title="Write a journey" subTitle="Change a life" />

      <div className="home-btn">
        <button className="btn signIn-btn home-btn">Learn More</button>
        <button className="btn  signUp-btn home-btn">Get Started</button>
      </div>
      <hr />
    </div>
  );
};

export default Home;
