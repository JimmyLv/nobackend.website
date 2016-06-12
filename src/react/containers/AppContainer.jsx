import { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { musicListAction } from '../redux/actions/musicListAction'

class AppContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMusic()
  }

  render() {
    return (
      <div id="container">
        <Header musicList={this.props.musicList}/>
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {}
AppContainer.defaultProps = {}

function mapProps(state) {
  return {
    musicList: state.musicList
  }
}

function mapDispatch(dispatch) {
  return {
    fetchMusic: () => dispatch(musicListAction())
  }
}

export default connect(mapProps, mapDispatch)(AppContainer)