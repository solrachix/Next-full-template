import { jwtVerify } from 'jose'
import { JWT_SECRET_KEY } from '@/configs'

interface UserJwtPayload {
  jti: string
  iat: number
}

export async function verifyAuth(token: string) {
  if (!token) {
    return false
  }

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET_KEY)
    )
    return verified.payload as UserJwtPayload
  } catch (err) {
    return false
  }
}
