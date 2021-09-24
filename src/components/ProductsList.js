import React from 'react';

const ProductsList = ({products}) => (
  <table>
    {products.map(product => (
      <tr>
        <td>{product.code}</td>
        <td>{product.name}</td>
        <td>{product.price} €</td>
      </tr>
    ))}
  </table>
)

export default ProductsList;
