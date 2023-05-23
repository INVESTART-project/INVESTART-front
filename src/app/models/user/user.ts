export type UserList = User[]

export interface User {
  id: number
  username: any
  email: string
  phoneNumber: string
  password: string
  role: Role
  enabled: boolean
  accountNonExpired: boolean
  credentialsNonExpired: boolean
  authorities: any
  accountNonLocked: boolean
}

export interface Role {
  id: number
  name: string
}
