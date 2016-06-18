import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleContentAction } from '../../redux/actions/toggleAction'

import './Header.less'
import MenuList from './MenuList'
import ToolBar from './ToolBar'
import Player from './Player'

const Header = ({ musicList, toggleContent }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => toggleContent()} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
      </span>
    </div>
    <MenuList />
    <Player songs={musicList}/>
    <ToolBar />
  </header>
)

Header.propTypes = {
  musicList: PropTypes.array.isRequired,
  toggleContent: PropTypes.func.isRequired
}
Header.defaultProps = {}

function mapProps() {
  return {}
}

function mapDispatch(dispatch) {
  return {
    toggleContent: () => dispatch(toggleContentAction())
  }
}

export default connect(mapProps, mapDispatch)(Header)