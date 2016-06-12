import ReactDOM from 'react-dom'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import '../../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import 'bootstrap.css'
import 'yue.css'

import * as reducers from './redux/reducers/musicListReducer'
import renderRoutes from './routes'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false}/>
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {renderRoutes()}
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)