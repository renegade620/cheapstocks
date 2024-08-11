import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css'


function Home() {
  return (
    <>
    <div >
      <Navbar/>
       </div>
       
      
       
        <Link className='link' to='/Gaming'><img className='gamingpage' src='/images/gaming.jpg' alt=''/></Link> 
        
     
      
      </>
      
  );
}

export default Home
