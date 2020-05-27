import { getAxios } from '@/utils/request'
import api from '@/services/api'

export const findUser = () => getAxios(api.findUser)