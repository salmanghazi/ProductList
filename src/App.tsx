import React from 'react';
import './App.css';
import Products from './Products/products';
import { allProducts } from './allproducts';
function App() {
  return (
    <div className="App">
      <Products allproducts={allProducts}/>
    </div>
  );
}

export default App;
