import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { musicListReducer } from '../reducers/musicListReducer'

export default createStore(musicListReducer, compose(
  applyMiddleware(thunk)
))