import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import isEmpty from 'lodash/isEmpty'

import './AppContainer.less'
import Header from '../components/Header/Header'
import { fetchMusicList } from '../redux/actions'

class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatch(fetchMusicList())
  }

  render() {
    // const { musicList } = this.props
    // if (isEmpty(musicList)) {
    //   return <h1 style={{ 'text-align': 'center' }}><i>Loading...</i></h1>
    // }

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
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired
}
AppContainer.defaultProps = {}

function mapStateToProps(state) {
  return {
    musicList: state.musicList
  }
}

export default connect(mapStateToProps)(AppContainer)