import { Routes } from './routes'

export const USER_TOKEN = 'projectName-userToken'
export const USER_DATA = 'projectName-userData'

export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY! || 'secret'

const privateRoute = Routes.find(route => route.secure)
const authRoute = Routes.find(route => route.authSystem)

export { Routes, privateRoute, authRoute }
