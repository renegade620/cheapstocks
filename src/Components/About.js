import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About CheapStocks</h2>
      <p>
        CheapStocks is your go-to platform for affordable stock photography. 
        We provide high-quality images at budget-friendly prices, making it 
        easier for businesses, designers, and individuals to access the 
        visual content they need.
      </p>
      <p>
        Our mission is to democratize stock photography by offering a wide 
        range of images across various categories, all at competitive prices.
      </p>
      <h3>Why Choose CheapStocks?</h3>
      <ul>
        <li>Affordable pricing</li>
        <li>High-quality images</li>
        <li>Wide variety of categories</li>
        <li>Easy-to-use platform</li>
        <li>Regular updates to our collection</li>
      </ul>
      <Link to="/cart">
        <img 
          className="cart"
          src="/local_mall_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
          alt="Add to Cart" 
        />
      </Link>
    </div>
  );
};

export default About;