import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import musicList from './musicListReducer'
import articles from './articlesReducer'

export default combineReducers({
  musicList,
  articles,
  routing: routerReducer
})
