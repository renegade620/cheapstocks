import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import KitchenProducts, { PRODUCTS } from "./kitchenproducts";
import './kitchen.css'
import DarkMode from "../Components/DarkMode";
function Kitchen() {
  return (
    <>
    <Navbar />
      <DarkMode/>
    <div className="kitchen">
      <div className="kitchen-content">
        <h1>Welcome to Our Kitchen</h1>
        <div className="kitchen-sections">
          <section className="kitchen-appliances">
            <h2>Appliances</h2>
            {/* Fridge, Oven, Microwave */}
            <KitchenProducts />
          </section>
          <section className="kitchen-cabinets">
            <h2>Cabinets</h2>
            {/* Drawer Filing Cabinet, Wall Cabinets, Base Cabinets */}
          </section>
          <section className="kitchen-countertops">
            <h2>Countertops</h2>
            {/* Granite Countertops, Marble Countertops, Quartz Countertops */}
          </section>
          <section className="kitchen-sinks">
            <h2>Sinks</h2>
            {/* Stainless Steel Sink, Undermount Sink, Farmhouse Sink */}
          </section>
          <section className="kitchen-lighting">
            <h2>Lighting</h2>
            {/* Pendant Lights, Under-Cabinet Lighting, Recessed Lighting */}
          </section>
          <section className="kitchen-flooring">
            <h2>Flooring</h2>
            {/* Hardwood Flooring, Tile Flooring, Vinyl Flooring */}
          </section>
        </div>
      </div>
    </div>
    </>
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
