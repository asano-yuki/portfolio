import axios from 'axios'

import { serverPath } from '../util'
import { types } from './actionTypes'

export type SkillState = {
  _id         : number
  name        : string
  category    : string
  subCategory : string
  years       : { start : string | null, end : string | null }[]
  status : {
    practice : boolean
    use      : boolean
    unused   : boolean
  }
}

export type ActionTypes = {
  type : typeof types.SUBSCRIBE_SKILL
  data : SkillState[]
}

/**
 * API経由でスキル情報を取得
 */
export const subscribeSkill = async (): Promise<ActionTypes> => {
  const res = await axios.get(`${serverPath}/api/skill`)
  const data: SkillState[] = res.data
  return { type: types.SUBSCRIBE_SKILL, data }
}
