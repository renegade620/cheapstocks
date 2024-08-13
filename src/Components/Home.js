import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
import { Cart } from './Cart';

//NB insert your page links in the page links div
function Home() {
  return (
    <>
    <div >
      <Navbar size={Cart.length}/>
       </div>
       <div className='page links'>
      
       
        <Link className='link' to='/Gaming'><img className='gamingpage' src='./gaming.jpg' alt=''/></Link> 
        
        
     
        </div>
      </>
      
  );
}

export default Home
