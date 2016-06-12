import { FETCH_MUSIC } from '../actions/musicListAction'

function musicListReducer(state = [], action) {
  switch (action.type) {
    case FETCH_MUSIC:
      return [...action.payload]
    default:
      return state
  }
}

export default musicListReducer