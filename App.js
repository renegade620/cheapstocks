import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { fetchProducts } from './api/productApi';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cheap Stocks - Toiletries</h1>
        </header>
        <Switch>
          <Route exact path="/">
            <ProductList products={products} addToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart items={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;