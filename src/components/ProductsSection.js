import React, { Component } from 'react';
import ProductsList from './ProductsList.js';

class ProductsSection extends Component {
  render() {
    const products = [
      { code: "GR1", name: "Green Tea", price: "3.11" },
      { code: "SR1", name: "Strawberries", price: "5.00" },
      { code: "CF1", name: "Coffe", price: "11.23" },
    ];

    return (
      <div>
        <h1>Products List</h1>
        <ProductsList products={products} />
      </div>
    );
  }
}

export default ProductsSection;
