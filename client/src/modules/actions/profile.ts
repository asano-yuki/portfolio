import axios from 'axios'

import { serverPath } from '../util'
import { types } from './actionTypes'

export type ProfileState = {
  _id                 : number
  name                : string
  sex                 : string
  birthday            : string
  address             : string
  educational         : string
  job                 : string
  experience          : [{ name: string, start: Date, end?: Date }]
  capacity            : string[]
  specialtyField      : string[]
  specialtyTechnology : string[]
  specialtyWork       : string[]
  pr                  : string
}

export type ActionTypes = {
  type : typeof types.SUBSCRIBE_PROFILE
  data : ProfileState
}

/**
 * API経由でプロフィール情報を取得
 */
export const subscribeProfile = async (): Promise<ActionTypes> => {
  const res = await axios.get(`${serverPath}/api/profile`)
  const data: ProfileState = res.data[0]
  return { type: types.SUBSCRIBE_PROFILE, data }
}
