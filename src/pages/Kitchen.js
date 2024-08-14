import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import KitchenProducts, { PRODUCTS } from "./kitchenproducts";
import './kitchen.css'

function Kitchen() {
  return (
    <div className="kitchen">
      <Navbar />
      <div className="kitchen-content">
        <h1>Welcome to Our Kitchen</h1>
        <div className="kitchen-sections">
          <section className="kitchen-appliances">
            <h2>Appliances</h2>
            {/* fridge */}
            <KitchenProducts />
          </section>
          <section className="kitchen-cabinets">
            <h2>Cabinets</h2>
            {/*Drawer Filing Cabinet*/}
          </section>c
          <section className="kitchen-countertops">
            <h2>Countertops</h2>
            {/* counter tops*/}
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/" element={<Navigate to="/kitchen" replace />} />
    </Routes>
  );
}

export default Kitchen;
