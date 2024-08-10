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
        </nav>
    </header>
  )
}

export default Navbar