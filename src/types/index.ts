export interface Product {
  code: string;
  name: string;
  price: number;
}

export interface Basket {
  productCodes: string[];
  price: number;
}

export interface ApiResponse<T> {
  ok: boolean;
  error?: string;
  products?: Product[];
  basket?: Basket;
}

export interface ProductsListProps {
  products: Product[];
  isLoaded: boolean;
  error: string;
  addProductToBasket: (code: string) => () => void;
}

export interface BasketProps {
  basket: Basket;
  isLoaded: boolean;
  error: string;
}
