import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './AppContainer.less'
import Header from '../components/Header/Header'
import * as actionCreators from '../redux/actions'

class AppContainer extends Component {
  componentDidMount() {
    this.props.fetchMusicList()
  }

  render() {
    return (
      <div className="main-app">
        <Header musicList={this.props.musicList}/>
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {
  musicList: PropTypes.array.isRequired,
  fetchMusicList: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}
AppContainer.defaultProps = {}

function mapStateToProps(state) {
  return {
    musicList: state.musicList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)