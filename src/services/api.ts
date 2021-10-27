import axios from 'axios'

import Interceptors from '../configs/axiosInterceptors'

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`
})

Interceptors(api)

export default api
