import React from 'react';

const ProductsList = ({products, isLoaded, error}) => {
  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        {products.map(product => (
          <tr>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    );
  }
}

export default ProductsList;
