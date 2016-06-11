import {
  Component,
  PropTypes,
} from 'react'

import Header from '../components/Header'

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {}
AppContainer.defaultProps = {}

export default AppContainer
