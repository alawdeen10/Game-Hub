import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/kratos.png";
import testbanner1 from "../assets/TestBanner1.png";

const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="hero-left">
        <h2>NEW GAMES</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Game Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div> */}
      <img src={testbanner1} alt="" />
    </div>
  );
};

export default Hero;
