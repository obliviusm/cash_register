import apisauce from 'apisauce'
import ApiConfig from './ApiConfig'

const create = () => {
  const api = apisauce.create({
    baseURL: ApiConfig.baseURL,
    timeout: ApiConfig.timeout,
    responseType: ApiConfig.responseType
  })

  const getProducts = async () => {
    const response = await api.get('/products');

    if (response.ok) {
      const { products } = response.data
      return { ok: true, products }
    }
    console.log(response)
    return { ok: false, error: response.problem }
  }

  const getFullPrice = async (basket) => {
    const response = await api.get('/basket_price', { product_codes: basket });

    if (response.ok) {
      const { price } = response.data
      return { ok: true, price }
    }
    console.log(response)
    return { ok: false, error: response.problem }
  }

  return {
    getProducts,
    getFullPrice
  }
}

export default create()
