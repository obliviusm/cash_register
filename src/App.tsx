import React, { useState, useEffect } from 'react';
import api from './services/api';
import ProductsList from './components/ProductsList';
import Basket from './components/Basket';
import { Product, Basket as BasketType } from './types';

function App() {
  const [areProductsLoaded, setAreProductsLoaded] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [errorProducts, setErrorProducts] = useState("");
  const [basket, setBasket] = useState<BasketType>({ productCodes: [], price: 0 });
  const [isBasketLoaded, setIsBasketLoaded] = useState(true);
  const [errorBasket, setErrorBasket] = useState("");

  useEffect(() => {
    fetchProductsData();
  }, []);

  const fetchProductsData = async () => {
    const result = await api.getProducts();

    if (result.ok && result.products) {
      setAreProductsLoaded(true);
      setProducts(result.products);
    } else {
      setAreProductsLoaded(true);
      setErrorProducts(result.error || "Unknown error occurred");
    }
  };

  const fetchBasketData = async (newProductCodes: string[]) => {
    const result = await api.getBasket(newProductCodes);

    if (result.ok && result.basket) {
      setIsBasketLoaded(true);
      setBasket(result.basket);
    } else {
      setIsBasketLoaded(true);
      setErrorBasket(result.error || "Unknown error occurred");
    }
  };

  const addProductToBasket = (productCode: string) => () => {
    const newProductCodes = [...basket.productCodes, productCode];
    fetchBasketData(newProductCodes);
  };

  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductsList
        products={products}
        isLoaded={areProductsLoaded}
        error={errorProducts}
        addProductToBasket={addProductToBasket}
      />
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
