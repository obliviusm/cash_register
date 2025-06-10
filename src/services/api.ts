import axios from 'axios';
import ApiConfig from './ApiConfig';
import { ApiResponse, Product, Basket } from '../types';

interface ProductsResponse {
  products: Product[];
}

interface BasketResponse {
  basket: Basket;
}

const api = axios.create({
  baseURL: ApiConfig.baseURL,
  timeout: ApiConfig.timeout,
  responseType: 'json'
});

const getError = (error: any): string => {
  return error.response?.data?.error || error.message;
};

const getProducts = async (): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await api.get<ProductsResponse>('/products');
    const { products } = response.data;
    return { ok: true, products };
  } catch (error) {
    return { ok: false, error: getError(error) };
  }
};

const getBasket = async (productCodes: string[]): Promise<ApiResponse<Basket>> => {
  try {
    const response = await api.get<BasketResponse>('/basket', {
      params: { product_codes: productCodes }
    });
    const { basket } = response.data;
    return { ok: true, basket };
  } catch (error) {
    return { ok: false, error: getError(error) };
  }
};

export default {
  getProducts,
  getBasket
};
