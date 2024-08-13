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
    imageUrl: 'https://example.com/microwave.jpg'
  },
  {
    name: 'Blender',
    price: '$49.99',
    imageUrl: 'https://example.com/blender.jpg'
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
