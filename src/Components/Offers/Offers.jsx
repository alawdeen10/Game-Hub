import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/gta.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclsive</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLING GAMES</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
