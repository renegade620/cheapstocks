import React, { useState } from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Home.css'
import Cart from './Cart';


//NB insert your page links in the page links div
function Home() {
  const [cart,setCart] = useState([]);

  const handleClick = (product)=>{
   console.log(product)
  }
  return (
    <>
    <div >
      <Navbar size={Cart.length}/>
      
       </div>
       <div className='page links'>
      
       
<<<<<<< HEAD
        <Link className='link' to='/Gaming'><img className='gamingpage' src='/gaming.jpg' alt=''/></Link>
        <Link className='link' to='/Library'><img className='gamingpage' src='/images/library.png' alt=''/></Link>
        <Link className='link' to='./Foodstuff'><img className='gamingpage' src='public/images/foodlogo.jpg' alt=''/></Link>
=======
        <Link handleClick={handleClick} className='link' to='/Gaming'><img className='gamingpage' src='./gaming.jpg' alt=''/></Link> 
        <Link className='link' to='/Library'><img className='gamingpage' src='./Pasted image.png'/></Link>
        <Link  to='/Kitchen'><img className='gamingpage link' src='./kitchen equipments.jpg'/></Link>
        
>>>>>>> main
        
     
        </div>
      </>
      
  );
}

export default Home
