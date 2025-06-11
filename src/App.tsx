import React from 'react';
import ProductsList from './components/ProductsList';
import Basket from './components/Basket';
import { useBasket } from './hooks/useBasket';

function App() {
  const {
    basket,
    isLoaded: isBasketLoaded,
    error: errorBasket,
    addProduct
  } = useBasket();

  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductsList addProductToBasket={addProduct} />
      <h1>Basket</h1>
      <Basket
        basket={basket}
        isLoaded={isBasketLoaded}
        error={errorBasket}
      />
    </div>
  );
}

export default App;
