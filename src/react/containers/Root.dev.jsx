import { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import DevTools from './DevTools'
import renderRoutes from '../routes'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {renderRoutes()}
          </Router>
          { !window.devToolsExtension ? <DevTools /> : null }
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}