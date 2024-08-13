import React from "react";

import Navbar from "../Components/Navbar";
import "./Library.css"

function Library() {
  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div id="hero-container">
        <img src="/images/library-hero.jpg" alt="bookshelf" />
        <div id="hero-content">
        <h1>Isn't it hard to find <strong>Technological Books</strong>?</h1>
        <p>worry not, for we went all out to give you just that!</p>
        <button id="hero-button">Shop with us!</button>
        </div>
      </div>
    </>
  );
}

export default Library;
