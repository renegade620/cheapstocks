import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';


export const Product = (props) => {
const {id,productName,Price,productImage}=props.data
  return (
     <>
       <div className='product'>
     <div className='page'>
      <img className='item-img' src={productImage}/>
    <p><b>{productName}</b></p>
    <p>${Price}</p>
    <Link to='./cart'><button  className='Add'>Add to Cart</button></Link>
    </div>
   </div>
    <div className='description'> </div>
    </>
  )
}
