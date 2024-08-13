import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
import cart from './Cart'

//NB insert your page links in the page links div
function Home() {
  return (
    <>
    <div >
      <Navbar size={cart.length}/>
       </div>
       <div className='page links'>
      
       
        <Link className='link' to='/Gaming'><img className='gamingpage' src='images/gaming.jpg' alt=''/></Link>
        <Link className='link' to='/Library'><img className='gamingpage' src='/images/library.png'/></Link>
        
        <Link className='link' to='/kitchen'><img className='gamingpage' src='/images/kitchen equipments.jpg' alt=''/></Link> 

     
        </div>
      </>
      
  );
}

export default Home
