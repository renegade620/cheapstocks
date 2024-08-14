import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';


export const Product = (props) => {
const {id,productName,Price,productImage}=props.data
  return (
     <>
      
     <div className='page'>
    <div className='product'>
      <img src={productImage}/>
    </div>
    <div className='description'>
    <p><b>{productName}</b></p>
    <p>${Price}</p>
    <Link to='./cart'><button  className='Add'>Add to Cart</button></Link>
    </div>
    </div>
    </>
  )
}

