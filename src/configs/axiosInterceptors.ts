export default function Interceptors(api) {
  api.interceptors.response.use(
    response => {
      return response
    },
    error => {
      switch (error.response.status) {
        case 404:
          console.log('ocorreu o erro de código 404')
          break
      }

      return Promise.reject(error)
    }
  )
}
