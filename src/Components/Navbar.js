import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({size}) => {
  return (
    <header className='header'>
        <h1 className='h1'>Cheap<span>Stocks</span></h1>
        <nav className='navbar'>
            <a href='#'>About</a>
            <a href='#'> Sellers</a>
            <a href='#'>Contact Us</a>
            
            <Link to="/cart" ><span>{size}</span><img className='cart' src='/local_mall_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png' alt='Add to Cart' />
            </Link>
            
            
        </nav>
    </header>
  )
}

export default Navbar;