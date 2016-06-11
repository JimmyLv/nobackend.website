import {
  Component,
  PropTypes,
} from 'react'

import './AppContainer.less'
import Header from '../components/Header/Header'

class AppContainer extends Component {
  render() {
    return (
      <div id="container">
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {}
AppContainer.defaultProps = {}

export default AppContainer
