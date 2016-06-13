import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import DevTools from './DevTools'
import renderRoutes from '../routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        {renderRoutes()}
      </Router>
      {!window.devToolsExtension ? <DevTools /> : null}
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root