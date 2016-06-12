import { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import renderRoutes from '../routes'

export default class Root extends Component {
  render() {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
          {renderRoutes()}
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}