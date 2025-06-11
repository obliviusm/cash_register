import { atom } from 'jotai';
import { Product, Basket } from '../types';

interface ProductsState {
  products: Product[];
  isLoaded: boolean;
  error: string;
}

interface BasketState {
  basket: Basket;
  isLoaded: boolean;
  error: string;
}

export const productsAtom = atom<ProductsState>({
  products: [],
  isLoaded: false,
  error: ""
});

export const basketAtom = atom<BasketState>({
  basket: { productCodes: [], price: 0 },
  isLoaded: true,
  error: ""
});
