import { types } from '../actions/actionTypes'
import { SkillState, ActionTypes } from '../actions/skill'

type State = SkillState[] | null

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
  case types.SUBSCRIBE_SKILL:
    return Object.assign(state || [], action.data)
  default:
    return state
  }
}
