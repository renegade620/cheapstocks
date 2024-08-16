//Library.js

import React, { useEffect, useState } from "react";

import Navbar from "../Components/Navbar";
import "./Library.css";
import heroImage from "../assets/images/library-hero.jpg";
import Footer from "../Components/Footer";

function Library() {
  const [books, setBooks] = useState([]);
  const [bestSeller, setBestSeller] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/books") //fetch from json server
      .then((r) => r.json())
      .then((data) => {
        setBooks(data);

        let bestSellerBook = data[0]; // initialize the best selling book to the first indexed book
        let i = 0;

        // for loop to display best selling book
        // the book with the greatest average rating is displayed
        for (i = 1; i < data.length; i++) {
          const currentAverageRating = calculateAverageRating(data[i]);
          const bestSellerAverageRating =
            calculateAverageRating(bestSellerBook);
          if (currentAverageRating > bestSellerAverageRating)
            bestSellerBook = data[i];
        }
        setBestSeller(bestSellerBook);
        setIsLoading(false);
      });
  }, []);

  // function to calculate average book rating
  function calculateAverageRating(book) {
    if (!book || !book.reviews || !Array.isArray(book.reviews)) {
      return 0;
    }

    // reduce method to calculate sum
    const sum = book.reviews.reduce(
      (total, review) => total + review.rating,
      0
    );
    return sum / book.reviews.length;
  }

  // filter function based on search item
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      book.author.toLowerCase().includes(searchItem.toLowerCase())
  );

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
          <a href="#top-sellers">
            {/* perharps a smoother scroll? */}
            <button
              id="hero-button"
              onclick="window.location.href='#top-sellers'"
            >
              Shop with us!
            </button>
          </a>
        </div>
      </div>
      <div id="top-sellers">
        <h1 id>BEST SELLERS</h1>
        {isLoading ? ( // ternary operation - if false
          <p>Loading...</p>
        ) : bestSeller ? ( // ternary operation - if true
          <div className="best-seller">
            <img
              className="book-image"
              src={bestSeller.image}
              alt={bestSeller.title}
            />
            <h2>{bestSeller.title}</h2>
            <p>By {bestSeller.author}</p>
            <p className="price">Price: Ksh {bestSeller.price.toFixed(2)}</p>
            <p>
              Average Rating: {calculateAverageRating(bestSeller).toFixed(1)}
            </p>
            {/* <p>Genre: {bestSeller.genre.join(", ")}</p> */}
            <p>{bestSeller.description}</p>
            <button>Add to Cart</button>
          </div>
        ) : (
          <p>No best seller currently</p>
        )}
      </div>
      <div id="other-sellers">
        <hr />
        <h2>ALL BOOKS</h2>
        {/* adds search filter */}
        <div id="search">
          <input
            type="text"
            placeholder="Search books..."
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
          />
        </div>
        <hr />
        <br />
        {isLoading ? ( // ternary operation - if false
          <p>Loading...</p>
        ) : filteredBooks.length > 0 ? ( // ternary operation - if true
          <div className="book-list">
            {filteredBooks.map((book) => ( // map method
              <div key={book.id}>
                <img className="book-image" src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>By {book.author}</p>
                <p className="price">Price: Ksh {book.price.toFixed(2)}</p>
                <p>Average Rating: {calculateAverageRating(book).toFixed(1)}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        ) : (
          <p> No books available at the moment</p>
        )}
      </div>
      {/* ensure footer is rendered */}
      <Footer /> 
    </>
  );
}

export default Library;
