import React from "react";
import { Link } from 'react-router-dom';

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p id="footer-links">All your needs under one roof:<br /><span><Link to="/">Home</Link> | <Link to="/Gaming">Games</Link>| <Link to="/Library">Books</Link> | <Link to="/Kitchen">Kitchen</Link> | <Link to="/Food">Food</Link> | <Link to="/">Toileteries</Link></span></p>
      <p>
        <br/>&copy; {new Date().getFullYear()}  <strong>CheapStocks</strong>. All
        rights reserved.
      </p>
      <p>
        Subscribe to be alerted on new and great offers from us!<br />
        <input placeholder="Enter Email Address" />&nbsp;
        <button> Subscribe</button>
      </p>
    </footer>
  );
}
