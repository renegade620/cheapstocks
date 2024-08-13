import React from 'react'
import './Gamingpage.css'
import { PRODUCTS } from './products'
import { Product } from './Product'

const Gamingpage = () => {
  return (
    <>
    <div>
        <h1>CHEAPSTOCKS TECH</h1>
    </div>
    <div className='products'>
      {""}
         {PRODUCTS.map((product)=>(
          <Product data={product}/>
         ))}
    </div>
    </>
  )
  
}

export default Gamingpage