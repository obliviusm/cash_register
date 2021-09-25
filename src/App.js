import React, { Component } from 'react';

import api from './services/api';
import './App.css';
import ProductsList from './components/ProductsList.js';
import Basket from './components/Basket.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areProductsLoaded: false,
      products: [],
      errorProducts: "",
      basket: { productCodes: [], price: 0 },
      isBasketLoaded: true,
      errorBasket: ""
    };
  }

  componentDidMount() {
    this.fetchProductsData();
  }

  async fetchProductsData() {
    const result = await api.getProducts();

    if (result.ok) {
      this.setState({
        areProductsLoaded: true,
        products: result.products
      });
    } else {
      this.setState({
        areProductsLoaded: true,
        errorProducts: result.error
      });
    }
  }

  async fetchBasketData(newProductCodes) {
    const result = await api.getBasket(newProductCodes);

    if (result.ok) {
      this.setState({
        isBasketLoaded: true,
        basket: result.basket,
      });
    } else {
      this.setState({
        isBasketLoaded: true,
        errorBasket: result.error
      });
    }
  }

  addProductToBasket = (productCode) => {
    return () => {
      const { productCodes } = this.state.basket;
      const newProductCodes = [...productCodes, productCode];
      this.fetchBasketData(newProductCodes);
    }
  }

  render() {
    const { products, areProductsLoaded, errorProducts,
      basket, isBasketLoaded, errorBasket } = this.state;

    return (
      <div className="App">
        <h1>Products List</h1>
        <ProductsList products={products} isLoaded={areProductsLoaded} error={errorProducts} addProductToBasket={this.addProductToBasket} />
        <h1>Basket</h1>
        <Basket basket={basket} isLoaded={isBasketLoaded} error={errorBasket} />
      </div>
    );
  }
}

export default App;
