import React from 'react';
import './kitchen.css';

const products = [
  {
    name: 'Fridge',
    price: '$29.99',
    imageUrl: 'https://tvguru.co.ke/wp-content/uploads/2022/07/Samsung-Side-by-Side-635-Litres-Refrigerator-RS64R5311B4.webp'
  },
  {
    name: 'Drawer Filing Cabinet',
    price: '$89.99',
    imageUrl: 'https://leonofficefurniture.co.ke/wp-content/uploads/2024/07/WhatsApp-Image-2024-04-19-at-3.34.17-PM-1.jpeg'
  },
  {
    name: 'Counter tops',
    price: '$49.99',
    imageUrl: 'https://www.woodreface.com/wp-content/uploads/2021/03/McElroy-AFTER-Peninsula-Countertops-9102-scaled.jpg'
  },
  {
    name: 'Microwave',
    price: '$39.99',
    imageUrl: 'https://www.questappliances.com/wp-content/uploads/2022/05/rm458-_am720c3d.jpg'
  },
  {
    name: 'Wall Cabinets',
    price: '$59.99',
    imageUrl: 'https://www.tacc.co.ke/wp-content/uploads/2023/10/PDINCBT32_GlossyWhiteGold_1.jpg'
  },
  {
    name: 'https://m.media-amazon.com/images/I/81kSculx6vL._AC_SL1500_.jpg',
    price: '$79.99',
    imageUrl: 'https://example.com/granite-countertop.jpg'
  },
  {
    name: 'Stainless Steel Sink',
    price: '$25.99',
    imageUrl: 'https://m.media-amazon.com/images/I/71pDoLyahPL._AC_SL1500_.jpg'
  },
  {
    name: 'Pendant Lights',
    price: '$19.99',
    imageUrl: 'https://m.media-amazon.com/images/I/71-obpNM5zL._AC_UL320_.jpg'
  },
  {
    name: 'Hardwood Flooring',
    price: '$99.99',
    imageUrl: 'https://m.media-amazon.com/images/I/91wJjjd7ynL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
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
