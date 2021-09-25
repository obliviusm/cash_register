import React from 'react';

const showProductCodes = (productCodes) => productCodes.join(", ");

const Basket = ({basket, isLoaded, errorMessage}) => (
  <table>
    <tbody>
      <tr>
        <td>{showProductCodes(basket.productCodes)}</td>
        <td>{basket.price}</td>
      </tr>
    </tbody>
  </table>
);

export default Basket;
