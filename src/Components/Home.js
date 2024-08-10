import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Link } from "react-router-dom";


function Home() {
  return (
    <>
    <div >
      <Navbar/>
       </div>
      <div>
        
      <Link to='/Gamingpage'><img src='/images/gaming.jpg' alt=''/><h2>Gaming</h2></Link>
      
      </div>
      
      </>
      
  );
}

export default Home
