import { setup } from 'axios-cache-adapter'

import Interceptors from '../configs/axiosInterceptors'

const api = setup({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,

  cache: {
    maxAge: 15 * 60 * 1000, // 15 mins
    exclude: {
      // Only exclude POST, PUT, PATCH and DELETE methods from cache
      methods: ['post', 'put', 'patch', 'delete']
    }
  }
})

Interceptors(api)

export default api
