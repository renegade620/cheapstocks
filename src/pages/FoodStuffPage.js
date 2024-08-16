import React from 'react'
import Navbar from '../Components/Navbar'
import './Toiletries.css'
import DarkMode from '../Components/DarkMode'

export const FoodStuffPage = () => {
  return (
    <>
    <div>
      <Navbar/>
      <DarkMode/>
    </div>
    
   <body className='showcart'>
   <div className='listproduct'>
      <div className='item'>
         <img src='./images/Apples.jpg'/>
         <h2>Apples</h2>
         <div className='price'>$2</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Bread.jpg'/>
         <h2>Bread</h2>
         <div className='price'>$4</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Coconuts.jpg'/>
         <h2>Coconuts</h2>
         <div className='price'>$5</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Coffee.jpg'/>
         <h2>Coffee</h2>
         <div className='price'>$3</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Eggs.jpg'/>
         <h2>Eggs</h2>
         <div className='price'>$14</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Flour.jpg'/>
         <h2>Flour</h2>
         <div className='price'>$9</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Groundnuts.jpg'/>
         <h2>GroundNuts</h2>
         <div className='price'>$15</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Honey.jpg'/>
         <h2>Honey</h2>
         <div className='price'>$20</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Milk.jpg'/>
         <h2>Milk</h2>
         <div className='price'>$10</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
      <div className='item'>
         <img src='./images/Oil.jpg'/>
         <h2>Olive Oil</h2>
         <div className='price'>$15</div>
         <button className='addcart'>
          Add to Cart
         </button>
      </div>
   </div>
   </body>
    </>
  )
}

