import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { musicListAction } from '../redux/actions/musicListAction'

class AppContainer extends Component {
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

AppContainer.propTypes = {
  fetchMusic: PropTypes.func.isRequired,
  musicList: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired
}
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