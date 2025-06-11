import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { productsAtom } from '../store/atoms';
import api from '../services/api';

export const useProducts = () => {
  const [state, setState] = useAtom(productsAtom);

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
