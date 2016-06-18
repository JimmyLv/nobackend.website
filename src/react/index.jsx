/* eslint-disable */

import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import createHashHistory from 'history/lib/createHashHistory'
import { syncHistoryWithStore } from 'react-router-redux'

import '../../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import 'bootstrap.css'
import 'yue.css'

import Root from './containers/Root'
import store from './redux/store/index'

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(<Root store={store} history={history}/>, document.getElementById('app'))

function saveToStorage(state) {
  localStorage.setItem('APP_STATE', JSON.stringify(state))
}

store.subscribe(() =>
  saveToStorage(store.getState())
)
