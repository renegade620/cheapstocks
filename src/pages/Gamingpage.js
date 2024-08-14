import React from 'react'
import './Gamingpage.css'
import { PRODUCTS } from './products'
import { Product } from './Product'
import Navbar from '../Components/Navbar'
import { Cart } from '../Components/Cart'

const Gamingpage = () => {

  
  return (
    <>
    <div>
        <Navbar size={Cart.length}/>
    </div>
    
    <div className='products'>
      {""}
         {PRODUCTS.map((product)=>(
          <Product  data={product} />
         ))}
    </div>
    </>
  )
  
}

export default Gamingpage