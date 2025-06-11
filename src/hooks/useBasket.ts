import { useState } from 'react';
import api from '../services/api';
import { Basket as BasketType } from '../types';

interface BasketState {
  basket: BasketType;
  isLoaded: boolean;
  error: string;
}

export const useBasket = () => {
  const [state, setState] = useState<BasketState>({
    basket: { productCodes: [], price: 0 },
    isLoaded: true,
    error: ""
  });

  const fetchBasket = async (productCodes: string[]) => {
    const result = await api.getBasket(productCodes);

    if (result.ok && result.basket) {
      setState({
        basket: result.basket || { productCodes: [], price: 0 },
        isLoaded: true,
        error: ""
      });
    } else {
      setState({
        basket: { productCodes: [], price: 0 },
        isLoaded: true,
        error: result.error || "Unknown error occurred"
      });
    }
  };

  const addProduct = (productCode: string) => () => {
    const newProductCodes = [...state.basket.productCodes, productCode];
    fetchBasket(newProductCodes);
  };

  return {
    ...state,
    addProduct
  };
};
