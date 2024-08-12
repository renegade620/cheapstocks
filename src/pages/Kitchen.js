import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Kitchen() {
  return (
    <div className="kitchen">
      <Navbar />
      <div className="kitchen-content">
        <h1>Welcome to Our Kitchen</h1>
        <div className="kitchen-sections">
          <section className="kitchen-appliances">
            <h2>Appliances</h2>
            {/* toaster */}
          </section>
          <section className="kitchen-cabinets">
            <h2>Cabinets</h2>
            {/*pans */}
          </section>
          <section className="kitchen-countertops">
            <h2>Countertops</h2>
            {/* laminate */}
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

export default App;