import { types } from '../actions/actionTypes'
import { ExperienceState, ActionTypes } from '../actions/experience'

type State = ExperienceState[] | null

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
  case types.SUBSCRIBE_EXPERIENCE:
    return Object.assign(state || [], action.data)
  default:
    return state
  }
}
