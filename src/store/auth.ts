import { makeAutoObservable } from 'mobx'

import Cookies from 'js-cookie'

import router from 'next/router'

import api from '@/services/api'
import { USER_TOKEN } from '@/configs'

interface SignIn {
  email: string
  password: string
}

interface SingUp {
  email: string
  name: string
  password: string
}

interface AuthStoreInterface {
  User: UserData | null
  loading: boolean
  isAuthentication(cookies?: unknown): boolean
  signIn({ email, password }: SignIn): Promise<UserData>
  update(data: UserData): UserData
}

class AuthStore implements AuthStoreInterface {
  User: UserData | null
  loading = true

  constructor() {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true
      }
    )

    this.isAuthentication()
  }

  isAuthentication(cookies?: UserAuthentication): boolean {
    const user = cookies?.user || Cookies.get('user')
    const token = cookies?.token || Cookies.get(USER_TOKEN)

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`

      this.User = JSON.parse(user as string)
      this.loading = false

      return true
    } else {
      this.loading = false

      return false
    }
  }

  async signIn({ email, password }: SignIn): Promise<UserData> {
    try {
      const { data } = await api.post<UserAuthentication>(
        '/authentication/login',
        {
          email,
          password
        }
      )

      Cookies.set('user', JSON.stringify(data.user))
      Cookies.set(USER_TOKEN, data.token)

      this.User = data.user

      return data.user
    } catch (error) {
      console.log(error)
      throw error
    } finally {
      this.loading = false
    }
  }

  async signOut() {
    Cookies.remove('user')
    Cookies.remove(USER_TOKEN)

    api.defaults.headers.authorization = ''

    this.User = null

    router.push('/')
  }

  update(data: UserData) {
    Cookies.remove('user')
    Cookies.set('user', JSON.stringify(data))

    this.User = data

    return data
  }
}

const authStore = new AuthStore()
export default authStore
