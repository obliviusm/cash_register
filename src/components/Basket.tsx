import React from 'react';
import { useBasket } from '../hooks/useBasket';

const Basket: React.FC = () => {
  const { basket, isLoaded, error } = useBasket();

  if (!isLoaded) {
    return <div>Loading basket...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Basket</h2>
      <p>Total Price: ${basket.price}</p>
      <ul>
        {basket.productCodes.map(code => (
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;
