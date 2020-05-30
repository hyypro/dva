import { get, post } from '@/utils/request'
import api from '@/services/api'

export const findUser = () => get(api.findUser)
export const add = option => post(api.add, option)
export const dele = option => post(api.delete, option)
export const updata = option => post(api.update, option)

