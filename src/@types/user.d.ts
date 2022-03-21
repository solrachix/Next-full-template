interface UserData {
  id: number
  name: string
  brand: string
  segment: string
  email: string
  acceptedUserTerms: boolean
  numberOfUnits: number
}

interface UserAuthentication {
  user: UserData
  token: string
}
