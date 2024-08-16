import React from 'react'
import Navbar from '../Components/Navbar'
import './Toiletries.css'
import DarkMode from '../Components/DarkMode'


export const Toiletries = () => {
  return (
     <>
    <div>
      <Navbar/>
      <DarkMode/>
    </div>
    
   <body className='showcart'>
   <div className='listproduct'>
      <div className='item'>
         <img src='./images/combs.jpg'/>
         <h2>Combs</h2>
         <div className='price'>$5</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/hairgel.jpg'/>
         <h2>Hairgel</h2>
         <div className='price'>$10</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/rexona.jpg'/>
         <h2>Rexona</h2>
         <div className='price'>$5</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/tissues.jpg'/>
         <h2>Tissues</h2>
         <div className='price'>$8</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/toothbrush.jpg'/>
         <h2>Toothbrush</h2>
         <div className='price'>$16</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/toothpaste.jpg'/>
         <h2>Combs</h2>
         <div className='price'>$5</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/vaseline.jpg'/>
         <h2>Vaseline</h2>
         <div className='price'>$3</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
   </div>
   </body>
    </>
  )
}
