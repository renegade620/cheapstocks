import React from 'react'
import './Gamingpage.css'
import { PRODUCTS } from './products'
import { Product } from './Product'
import Navbar from '../Components/Navbar'

const Gamingpage = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    
    <div className='products'>
      {""}
         {PRODUCTS.map((product)=>(
          <Product data={product} />
         ))}
    </div>
    </>
  )
  
}

export default Gamingpage