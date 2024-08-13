import React from "react";
import Navbar from "../Components/Navbar";
import "./FoodStuff.css"

function FoodStuffPage() {
  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div id="food-container">
        <div id="initial-content">
        <h1>All Food Stuffs</h1>
        </div>
      </div>
    </>
  );
}

export default FoodStuffPage;
