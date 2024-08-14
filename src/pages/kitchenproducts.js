import React from 'react';
import './kitchen.css'

const products = [
  {
    name: 'fridge',
    price: '$29.99',
    imageUrl: 'https://tvguru.co.ke/wp-content/uploads/2022/07/Samsung-Side-by-Side-635-Litres-Refrigerator-RS64R5311B4.webp'
  },
  {
    name: 'Drawer Filing Cabinet',
    price: '$89.99',
    imageUrl: 'https://leonofficefurniture.co.ke/wp-content/uploads/2024/07/WhatsApp-Image-2024-04-19-at-3.34.17-PM-1.jpeg'
  },
  {
    name: 'cooker',
    price: '$49.99',
    imageUrl: 'https://www.woodreface.com/wp-content/uploads/2021/03/McElroy-AFTER-Peninsula-Countertops-9102-scaled.jpg'
  }
];

function KitchenProducts() {
  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img  src={product.imageUrl} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default KitchenProducts;
