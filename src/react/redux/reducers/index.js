import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import musicList from './musicListReducer'
import articleSummary from './articleSummaryReducer'
import article from './articleReducer'
import toggle from './toggleReducer'

export default combineReducers({
  musicList,
  articleSummary,
  article,
  toggle,
  routing: routerReducer,
  loadingBar: loadingBarReducer
})
