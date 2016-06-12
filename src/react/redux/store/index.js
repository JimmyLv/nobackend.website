import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'

import * as reducers from '../reducers/index'
import DevTools from '../../DevTools'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
)
