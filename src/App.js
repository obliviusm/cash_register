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
      errorProducts: ""
    };
  }

  componentDidMount() {
    this.fetchProductsData();
    // this.fetchBasketsData();
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

  async fetchFullPriceData() {
    const result = await api.getFullPrice();

    if (result.ok) {
      this.setState({
        isFullPriceLoaded: true,
        fullPrice: result.price
      });
    } else {
      this.setState({
        isFullPriceLoaded: true,
        errorFullPrice: result.error
      });
    }
  }

  render() {
    const basket = ["GR1", "SR1", "GR1", "GR1", "CF1"];
    const totalPrice = "22.45";
    const { products, areProductsLoaded, errorProducts } = this.state;

    return (
      <div className="App">
        <h1>Products List</h1>
        <ProductsList products={products} isLoaded={areProductsLoaded} error={errorProducts} />
        <h1>Basket</h1>
        <BasketSection basket={basket} totalPrice={totalPrice} />
      </div>
    );
  }
}

export default App;
