import React,{useState} from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Home.css'
import { Cart } from './Cart';

//NB insert your page links in the page links div
function Home() {
  const [cart,setCart] = useState([]);

  const handleClick = (product)=>{
   console.log(product)
  }
  return (
    <>
    <div >
      <Navbar size={cart.length}/>
       </div>
       <div className='page links'>
      
       
       <Link className='link' to='/Gaming'><img className='gamingpage' src='/gaming.jpg' alt=''/></Link>
        <Link className='link' to='/Library'><img className='gamingpage' src='./Pasted image.png' alt=''/></Link>
        <Link className='link' to='/Kitchen'><img className='gamingpage' src='./kitchen equipments.jpg'/></Link>
        <Link className='link' to='./Foodstuff'><img className='gamingpage' src='./foodlogo.jpg' alt=''/></Link>
        <Link className='link' to='./Toiletries'><img className='gamingpage' src='./TOIETRIES img.jpg' alt=''/></Link>
     </div>
     <div>
      <Footer/>
     </div>
      </>
      
  );
}

export default Home
