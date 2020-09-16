import axios from 'axios'

import { serverPath } from '../util'
import { types } from './actionTypes'

export type ExperienceState = {
  _id : number
  startDate : Date
  endDate   : Date
  title     : string,
  content   : string[],
  scale     : string,
  contract  : string,
  style     : string,
  role      : string,
  keySkill  : string,
  language  : string[],
  db        : string[],
  os        : string[],
  mw        : string[],
  fw        : string[],
  tool      : string[],
  charge    : string[]
}

export type ActionTypes = {
  type : typeof types.SUBSCRIBE_EXPERIENCE,
  data : ExperienceState[]
}

/**
 * API経由で実務経験情報を取得
 */
export const subscribeExperience = async (): Promise<ActionTypes> => {
  const res = await axios.get(`${serverPath}/api/experience`)
  const data: ExperienceState[] = res.data
  return { type: types.SUBSCRIBE_EXPERIENCE, data }
}
