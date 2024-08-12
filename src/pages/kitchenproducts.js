import React from 'react';

const products = [
  {
    name: 'Toaster',
    price: '$29.99',
    imageUrl: 'https://example.com/toaster.jpg'
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

function Product() {
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

export default Product;
