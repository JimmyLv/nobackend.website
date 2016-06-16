import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './Header.less'
import MenuList from './MenuList'
import ToolBar from './ToolBar'
import Player from './Player'

const Header = ({ musicList }) => (
  <header id="header">
    <div className="logo">
      <Link to="/note-blog" title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
      </Link>
    </div>
    <MenuList />
    <Player songs={musicList}/>
    <ToolBar />
  </header>
)

Header.propTypes = {
  musicList: PropTypes.array.isRequired
}
Header.defaultProps = {}

export default Header
