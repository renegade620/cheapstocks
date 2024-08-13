import React from 'react'
import './Product.css'

export const Product = (props) => {
  const {id,productName,Price,productImage}=props.data;
  return (
     <>
     <div className='page'>
    <div className='product'>
      <img src={productImage}/>
    </div>
    <div className='description'>
    <p><b>{productName}</b></p>
    <p>${Price}</p>
    </div>
    </div>
    </>
  )
}

