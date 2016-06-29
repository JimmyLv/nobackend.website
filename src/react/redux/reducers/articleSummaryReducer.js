import { FETCH_ARTICLE_SUMMARY } from '../actions'

function articleSummaryReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE_SUMMARY:
      return { ...action.articleSummary }
    default:
      return state
  }
}

export default articleSummaryReducer