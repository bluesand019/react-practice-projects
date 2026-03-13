import React from "react";
import flipcartLogo from "../images/flipkart.png";
import amazonLogo from "../images/amazon.png";
import shoeImage from "../images/shoe_image.png"

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={flipcartLogo} alt="flipcart-logo" />
            <img src={amazonLogo} alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoeImage} alt="" />
      </div>
    </main>
  );
};

export default Hero;
