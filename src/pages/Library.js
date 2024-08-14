import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import "./Library.css";
import heroImage from "../assets/images/library-hero.jpg";

function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then((r) => r.json())
      .then((data) => {
        setBooks(data);
      }, []);
  });

  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div id="hero-container">
        <img src={heroImage} alt="bookshelf" />
        <div id="hero-content">
          <h1>
            Isn't it hard to find <strong>Technological Books</strong>?
          </h1>
          <p>worry not, for we went all out to give you just that!</p>
          <button id="hero-button">Shop with us!</button>
        </div>
      </div>
      <div id="top-sellers">
        <h1 id>BEST SELLERS</h1>
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <p>Price: Ksh {book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Library;
