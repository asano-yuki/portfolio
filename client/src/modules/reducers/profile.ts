import { types } from '../actions/actionTypes'
import { ProfileState, ActionTypes } from '../actions/profile'

type State = ProfileState | null

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
  case types.SUBSCRIBE_PROFILE:
    return { ...state, ...action.data }
  default:
    return state
  }
}
