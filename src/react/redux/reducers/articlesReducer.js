import { FETCH_ARTICLE } from '../actions/articlesAction'

function articlesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return {...action.payload}
    default:
      return state
  }
}

export default articlesReducer