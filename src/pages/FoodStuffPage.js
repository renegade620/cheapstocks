import React from "react"
import Navbar from "../Components/Navbar"
import { GOODS } from './Goods'
import { Product } from './Product'
import "./FoodStuff.css"

function FoodStuffPage() {
  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div className='products'>
    {""}
       {GOODS.map((product)=>(
        <Product data={product} />
       ))}
  </div>
    </>
  );
}

export default FoodStuffPage;
