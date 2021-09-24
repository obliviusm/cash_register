import React from 'react';

const showBasket = (basket) => basket.join(", ");

const BasketSection = ({basket, fullPrice}) => (
  <table>
    <tbody>
      <tr>
        <td>{showBasket(basket)}</td>
        <td>{fullPrice} €</td>
      </tr>
    </tbody>
  </table>
);

export default BasketSection;
