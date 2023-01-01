import { setup } from 'axios-cache-adapter'

import Interceptors from '../configs/axiosInterceptors'

const api = setup({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,

  cache: {
    maxAge: 15 * 60 * 1000, // 15 mins
    exclude: {
      // Exclua apenas os métodos POST, PUT, PATCH e DELETE do cache
      methods: ['post', 'put', 'patch', 'delete']
    }
  }
})

Interceptors(api)

export default api
