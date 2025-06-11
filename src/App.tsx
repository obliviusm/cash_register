import React from 'react';
import ProductsList from './components/ProductsList';
import Basket from './components/Basket';

function App() {
  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductsList />
      <h1>Basket</h1>
      <Basket />
    </div>
  );
}

export default App;
