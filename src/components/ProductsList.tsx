import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { useBasket } from '../hooks/useBasket';
import { Product } from '../types';

const ProductItem: React.FC<{ product: Product; onAdd: () => void }> = ({ product, onAdd }) => (
  <div>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={onAdd}>Add to Basket</button>
  </div>
);

const ProductsList: React.FC = () => {
  const { products, isLoaded, error } = useProducts();
  const { addProduct } = useBasket();

  if (!isLoaded) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.code}
          product={product}
          onAdd={addProduct(product.code)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
