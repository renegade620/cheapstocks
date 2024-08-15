import React from "react"
import Navbar from "../Components/Navbar"
import { GOODS } from './Goods'

import "./FoodStuff.css"

function FoodStuffPage() {
  return (
    <>
      <div id="nav">
        <Navbar />
      </div>
      <div className='products'>
    {""}
       {GOODS.map((Good)=>(
        <Good data={Good} />
       ))}
  </div>
    </>
  );
}

export default FoodStuffPage;
