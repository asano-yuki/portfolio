import axios from 'axios'

import { serverPath } from '../util'
import { ProfileState } from './profile'
import { SkillState } from './skill'
import { ExperienceState } from './experience'
import { types } from './actionTypes'

export type AllState = {
  profile    : ProfileState
  skill      : SkillState[]
  experience : ExperienceState[]
}

export type ActionTypes = {
  type : typeof types.SUBSCRIBE_ALL
  data : AllState
}

export const subscribeAll = async (): Promise<ActionTypes> => {
  const res = await axios.get(`${serverPath}/api/all`)
  const { profile, skill, experience } = res.data
  const data: AllState = { profile: profile[0], skill, experience }
  return { type: types.SUBSCRIBE_ALL, data }
}
