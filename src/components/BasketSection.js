import React from 'react';

const showBasket = (basket) => basket.join(", ");

const BasketSection = ({basket, totalPrice}) => (
  <table>
    <tr>
      <td>{showBasket(basket)}</td>
      <td>{totalPrice} €</td>
    </tr>
  </table>
);

export default BasketSection;
