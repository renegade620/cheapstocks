import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
impo

//NB insert your page links in the page links div
function Home() {
  return (
    <>
    <div >
      <Navbar/>
       </div>
       <div className='page links'>
      
       
        <Link className='link' to='/Gaming'><img className='gamingpage' src='/gaming.jpg' alt=''/></Link>
        <Link className='link' to='/Library'><img className='gamingpage' src='/images/library.png' alt=''/></Link>
        <Link className='link' to='./Foodstuff'><img className='gamingpage' src='public/images/foodlogo.jpg' alt=''/></Link>
        
     
        </div>
      </>
      
  );
}

export default Home
