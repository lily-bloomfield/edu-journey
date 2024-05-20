import React from "react";
import bodyImg1 from "../../../assets/home-body-img2.svg";
import bodyImg2 from "../../../assets/home-body-img1.webp";

import "./HomeBody.css";
const HomeBody = () => {
  return (
    <div className="homebody-container">
      <div className="homebody-1">
        <div className="homebody-1-left">
          <h2>In bite sized steps</h2>
          <p>Share the life events that made up your journey.</p>
        </div>
        <div className="homebody-1-right">
          <img src={bodyImg1} />
        </div>
      </div>
      <div className="homebody-1">
        <div className="homebody-2-left">
          <img src={bodyImg2} />
        </div>
        <div className="homebody-2-right">
          <h2>Sharing Your Journey to Guide Others</h2>
          <p>Write your journey so you can help others on theirs.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
