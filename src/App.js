import React, { Component } from 'react';

import api from './services/api';
import './App.css';
import ProductsList from './components/ProductsList.js';
import BasketSection from './components/BasketSection.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areProductsLoaded: false,
      products: [],
      errorProducts: "",
      basket: [],
      fullPrice: 0
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

  async fetchFullPriceData(newBasket) {
    const result = await api.getFullPrice(newBasket);

    if (result.ok) {
      this.setState({
        isFullPriceLoaded: true,
        basket: newBasket,
        fullPrice: result.price
      });
    } else {
      this.setState({
        isFullPriceLoaded: true,
        basket: newBasket,
        errorFullPrice: result.error
      });
    }
  }

  addProductToBasket = (code) => {
    return () => {
      const { basket } = this.state;
      const newBasket = [...basket, code];
      this.fetchFullPriceData(newBasket);
    }
  }

  render() {
    const { products, areProductsLoaded, errorProducts, fullPrice, basket } = this.state;

    return (
      <div className="App">
        <h1>Products List</h1>
        <ProductsList products={products} isLoaded={areProductsLoaded} error={errorProducts} addProductToBasket={this.addProductToBasket} />
        <h1>Basket</h1>
        <BasketSection basket={basket} fullPrice={fullPrice} />
      </div>
    );
  }
}

export default App;
