import React from "react";
import img1 from "../../../assets/hero-img.webp";
import img2 from "../../../assets/publicJourney-rangsit.jpg";
import img3 from "../../../assets/publicJourney-chula.webp";
import img4 from "../../../assets/publicJourney-mahidol.jpg";
import img5 from "../../../assets/publicJourney-bangkok.jpg";

import "./PublicJourneysCards.css";

const PublicJourneysCards = () => {
  return (
    <div className="journeysCards-container">
      <div className="journeyCard">
        <div className="journeyCard-left">
          <img src={img1} />
        </div>
        <div className="journeyCard-right">
          <h2>Creation of Our Journey</h2>
          <p>By EduJourney</p>
          <p>
            I started preparing for my journey to a Thai university with lots of
            excitement and research. I explored different universities, checking
            out their courses and facilities. Gathering all the necessary
            documents like transcripts and recommendation letters was a bit of a
            task, but it was ...
          </p>
          <div>
            <button className="btn signIn-btn ">Read More</button>
            <div className="features">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="journeyCard">
        <div className="journeyCard-left">
          <img src={img2} />
        </div>
        <div className="journeyCard-right">
          <h2>My Journey to Rangsit University</h2>
          <p>By EduJourney</p>
          <p>
            I started preparing for my journey to a Thai university with lots of
            excitement and research. I explored different universities, checking
            out their courses and facilities. Gathering all the necessary
            documents like transcripts and recommendation letters was a bit of a
            task, but it was ...
          </p>
          <div>
            <button className="btn signIn-btn ">Read More</button>
            <div className="features">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="journeyCard">
        <div className="journeyCard-left">
          <img src={img3} />
        </div>
        <div className="journeyCard-right">
          <h2>My Chula Story</h2>
          <p>By EduJourney</p>
          <p>
            I started preparing for my journey to a Thai university with lots of
            excitement and research. I explored different universities, checking
            out their courses and facilities. Gathering all the necessary
            documents like transcripts and recommendation letters was a bit of a
            task, but it was ...
          </p>
          <div>
            <button className="btn signIn-btn ">Read More</button>
            <div className="features">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="journeyCard">
        <div className="journeyCard-left">
          <img src={img4} />
        </div>
        <div className="journeyCard-right">
          <h2>How to get into Mahidol University</h2>
          <p>By EduJourney</p>
          <p>
            I started preparing for my journey to a Thai university with lots of
            excitement and research. I explored different universities, checking
            out their courses and facilities. Gathering all the necessary
            documents like transcripts and recommendation letters was a bit of a
            task, but it was ...
          </p>
          <div>
            <button className="btn signIn-btn ">Read More</button>
            <div className="features">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="journeyCard">
        <div className="journeyCard-left">
          <img src={img5} />
        </div>
        <div className="journeyCard-right">
          <h2>My Life in Bangkok University</h2>
          <p>By EduJourney</p>
          <p>
            I started preparing for my journey to a Thai university with lots of
            excitement and research. I explored different universities, checking
            out their courses and facilities. Gathering all the necessary
            documents like transcripts and recommendation letters was a bit of a
            task, but it was ...
          </p>
          <div>
            <button className="btn signIn-btn ">Read More</button>
            <div className="features">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-bookmark"></i>
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="home-btn">
        <button className="btn  signUp-btn ">See More</button>
      </div>
    </div>
  );
};

export default PublicJourneysCards;
