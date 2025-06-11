import { useState, useEffect } from 'react';
import api from '../services/api';
import { Product } from '../types';

interface ProductsState {
  products: Product[];
  isLoaded: boolean;
  error: string;
}

export const useProducts = () => {
  const [state, setState] = useState<ProductsState>({
    products: [],
    isLoaded: false,
    error: ""
  });

  const fetchProducts = async () => {
    const result = await api.getProducts();

    if (result.ok && result.products) {
      setState({
        products: result.products || [],
        isLoaded: true,
        error: ""
      });
    } else {
      setState({
        products: [],
        isLoaded: true,
        error: result.error || "Unknown error occurred"
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    ...state,
    refetch: fetchProducts
  };
};
