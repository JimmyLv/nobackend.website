import { createStore, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from '../reducers/index'
import DevTools from '../../containers/DevTools'

function getInitialState() {
  var stateString = localStorage.getItem('APP_STATE')
  if (!stateString) {
    return {
      musicList: [{
        "name": "Feeling U",
        "url": "http://p2.music.126.net/zKr4hskGeZfxQbjbN15sdw==/7871403743831481.mp3",
        "lrc_url": "",
        "artists": "m80",
        "provider": "http://music.163.com/"
      }]
    }
  }
  return JSON.parse(stateString)
}

export default createStore(
  reducers,
  getInitialState(),
  compose(
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    ),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
  )
)