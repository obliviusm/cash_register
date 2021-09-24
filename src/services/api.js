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

  return {
    getProducts
  }
}

export default create()