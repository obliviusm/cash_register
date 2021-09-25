import React from 'react';

const showProductCodes = (productCodes) => productCodes.join(", ");

const Basket = ({basket, isLoaded, error}) => {
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <tbody>
          <tr>
            <td>{showProductCodes(basket.productCodes)}</td>
            <td>{basket.price}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Basket;
