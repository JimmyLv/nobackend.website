import { FETCH_ARTICLES } from '../actions/articlesAction'

function articlesReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...action.payload }
    default:
      return state
  }
}

export default articlesReducer