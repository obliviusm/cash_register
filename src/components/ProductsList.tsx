import React from 'react';
import { ProductsListProps } from '../types';

const ProductsList: React.FC<ProductsListProps> = ({ products, isLoaded, error, addProductToBasket }) => {
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <tbody>
          {products.map(product => (
            <tr key={product.code}>
              <td>{product.code}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td><button onClick={addProductToBasket(product.code)}>Add to Basket</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ProductsList;
