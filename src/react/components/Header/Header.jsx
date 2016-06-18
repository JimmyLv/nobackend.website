import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleContentAction } from '../../redux/actions/toggleAction'

import './Header.less'
import MenuList from './MenuList'
import ToolBar from './ToolBar'
import MusicPlayer from './MusicPlayer'

const menuList = [
  { name: 'Hello', link: '/hello' },
  { name: 'AppList', link: '/app-list' },
  { name: 'Blog', link: '/note-blog' },
  { name: 'Photo', link: '/photo' },
  { name: 'Zhihu', link: '/pages/zhihu' }
]

const Header = ({ musicList, toggleContent, pathname }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => toggleContent()} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
      </span>
    </div>
    <MenuList menuList={menuList} selectedUrl={pathname}/>
    <MusicPlayer songs={musicList}/>
    <ToolBar />
  </header>
)

Header.propTypes = {
  musicList: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  toggleContent: PropTypes.func.isRequired
}
Header.defaultProps = {}

function mapProps(state) {
  return {
    pathname: state.routing.locationBeforeTransitions.pathname
  }
}

function mapDispatch(dispatch) {
  return {
    toggleContent: () => dispatch(toggleContentAction())
  }
}

export default connect(mapProps, mapDispatch)(Header)