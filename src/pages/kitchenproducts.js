import React from 'react';

const products = [
  {
    name: 'fridge',
    price: '$29.99',
    imageUrl: 'https://tvguru.co.ke/wp-content/uploads/2022/07/Samsung-Side-by-Side-635-Litres-Refrigerator-RS64R5311B4.webp'
  },
  {
    name: 'Microwave',
    price: '$89.99',
    imageUrl: 'https://tvguru.co.ke/wp-content/uploads/2024/07/H20MOWS3-03-500-45.png'
  },
  {
    name: 'cooker',
    price: '$49.99',
    imageUrl: 'https://www.urbanappliances.co.ke/wp-content/uploads/2024/04/Urban-Appliances-964329.jpg'
  }
];

function KitchenProducts() {
  return (
    <div className="products">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default KitchenProducts;
