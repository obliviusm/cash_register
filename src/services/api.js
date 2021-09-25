import apisauce from 'apisauce'
import ApiConfig from './ApiConfig'

const create = () => {
  const api = apisauce.create({
    baseURL: ApiConfig.baseURL,
    timeout: ApiConfig.timeout,
    responseType: ApiConfig.responseType
  })

  const getError = (response) => (
    response.data && response.data.error || response.problem
  )

  const getProducts = async () => {
    const response = await api.get('/products');

    if (response.ok) {
      const { products } = response.data
      return { ok: true, products }
    }
    console.log(response)
    return { ok: false, error: getError(response) }
  }

  const getBasket = async (productCodes) => {
    const response = await api.get('/basket', { product_codes: productCodes });

    if (response.ok) {
      const { basket } = response.data
      return { ok: true, basket }
    }
    console.log(response)
    return { ok: false, error: getError(response) }
  }

  return {
    getProducts,
    getBasket
  }
}

export default create()
