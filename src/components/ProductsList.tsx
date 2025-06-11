import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';

interface ProductsListProps {
  addProductToBasket: (code: string) => () => void;
}

const ProductItem: React.FC<{ product: Product; onAdd: () => void }> = ({ product, onAdd }) => (
  <div>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <button onClick={onAdd}>Add to Basket</button>
  </div>
);

const ProductsList: React.FC<ProductsListProps> = ({ addProductToBasket }) => {
  const { products, isLoaded, error } = useProducts();

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
          onAdd={addProductToBasket(product.code)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
