import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import musicList from './musicListReducer'
import articles from './articlesReducer'
import article from './articleReducer'

export default combineReducers({
  musicList,
  articles,
  article,
  routing: routerReducer
})
