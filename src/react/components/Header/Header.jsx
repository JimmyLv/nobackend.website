import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { toggleContent } from '../../redux/actions'

import './Header.less'
import Navigation from './Navigation'
import ToolBar from './ToolBar'
import MusicPlayer from './MusicPlayer'

const menuList = [
  { name: 'Hello', link: '/hello' },
  { name: 'AppList', link: '/app-list' },
  { name: 'Blog', link: '/note-blog' },
  { name: 'Photo', link: '/photo' },
  { name: 'Zhihu', link: '/pages/zhihu' }
]

const Header = ({ musicList, pathname, dispatch }) => (
  <header id="header">
    <div className="logo">
      <span onClick={() => dispatch(toggleContent())} title="立青作品">
        <img alt="avatar" src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
      </span>
    </div>
    <Navigation menuList={menuList} selectedUrl={pathname}/>
    <MusicPlayer songs={musicList}/>
    <ToolBar />
  </header>
)

Header.propTypes = {
  musicList: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}
Header.defaultProps = {}

function mapStateToProps(state) {
  return {
    pathname: state.routing.locationBeforeTransitions.pathname
  }
}

export default connect(mapStateToProps)(Header)