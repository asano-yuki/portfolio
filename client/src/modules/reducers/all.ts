import { types } from '../actions/actionTypes'
import { AllState, ActionTypes } from '../actions/all'

type State = AllState | null

export const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
  case types.SUBSCRIBE_ALL:
    return Object.assign({}, state, action.data)
  default:
    return state
  }
}
