import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'

import musicList from './musicListReducer'
import articles from './articlesReducer'
import article from './articleReducer'

export default combineReducers({
  musicList,
  articles,
  article,
  routing: routerReducer,
  loadingBar: loadingBarReducer
})
