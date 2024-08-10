import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <header className='header'>
        <h1 className='h1'>Cheap<span>Stocks</span></h1>
        <nav className='navbar'>
            <a>About</a>
            <a>Sellers</a>
            <a>Contact Us</a>
            <a>Add to Cart<img className='cart' src='/images/local_mall_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png' alt='Add to Cart' /></a>
        </nav>
    </header>
  )
}

export default Navbar