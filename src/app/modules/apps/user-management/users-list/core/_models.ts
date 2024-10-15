import { ID, Response } from '../../../../../../_metronic/helpers'
export type User = {
  id?: ID
  name?:string
  first_name?: string
  last_name?: string
  avatar?: string | null // Change this to a string or null
  email?: string
  position?: string
  role?: string
  password?: string | null
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}


export type UsersQueryResponse = Response<Array<User>>



export const initialUser: User = {
  avatar: null,
  position: 'Art Director',
  role: 'sdsd',
  first_name: '',
  last_name:'',
  password: "",
  email: '',
}
