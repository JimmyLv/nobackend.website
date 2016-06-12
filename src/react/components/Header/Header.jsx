import {
  Component,
  PropTypes,
} from 'react'
import { Link } from 'react-router'

import './Header.less'
import MenuList from './MenuList'
import ToolBar from './ToolBar'
import Player from './Player'

class Header extends Component {
  render() {
    const songs = [
      {
        "name": "空白格",
        "url": "http://p2.music.126.net/KReV3o3WB8L4VJR6mvl-5g==/2153943278813262.mp3",
        "lrc_url": "",
        "artists": "杨宗纬",
        "provider": "http://music.163.com/"
      }, {
        "name": "Inspire",
        "url": "http://p2.music.126.net/IB4CbLNNO5U1GAIPI0u32Q==/1983518976521409.mp3",
        "lrc_url": "",
        "artists": "Capo Productions",
        "provider": "http://music.163.com/"
      }, {
        "name": "刚刚好",
        "url": "http://p2.music.126.net/b1ywwf7QMIK52M_Fqpqb_w==/3420580685966691.mp3",
        "lrc_url": "",
        "artists": "薛之谦",
        "provider": "http://music.163.com/"
      }, {
        "name": "Feeling U",
        "url": "http://p2.music.126.net/zKr4hskGeZfxQbjbN15sdw==/7871403743831481.mp3",
        "lrc_url": "",
        "artists": "m80",
        "provider": "http://music.163.com/"
      }, {
        "name": "红色高跟鞋",
        "url": "http://p2.music.126.net/v4y5xLN-XkONDxbonZPLDw==/7990151000576838.mp3",
        "lrc_url": "",
        "artists": "蔡健雅",
        "provider": "http://music.163.com/"
      }, {
        "name": "You",
        "url": "http://p2.music.126.net/aVueNWYsxQzPGsEIemX-ZQ==/2075877953258328.mp3",
        "lrc_url": "",
        "artists": "Approaching Nirvana",
        "provider": "http://music.163.com/"
      }, {
        "name": "我知道你都知道",
        "url": "http://p2.music.126.net/TqpSkuvT7KBPtPGsQfUvhA==/5640494650578318.mp3",
        "lrc_url": "",
        "artists": "薛之谦",
        "provider": "http://music.163.com/"
      }, {
        "name": "Stepping Stones",
        "url": "http://p2.music.126.net/L0N27SjALVAFj9X6z8q8JA==/5937362790262727.mp3",
        "lrc_url": "",
        "artists": "Dave Thomas Junior",
        "provider": "http://music.163.com/"
      }, {
        "name": "He's a Pirate (Pirates of the Caribbean theme)",
        "url": "http://p2.music.126.net/r1q3FXvqHl6obVW4T-fUaA==/1984618488147502.mp3",
        "lrc_url": "",
        "artists": "David Garrett",
        "provider": "http://music.163.com/"
      }, {
        "name": "小城大事",
        "url": "http://p2.music.126.net/s84giYHIqifbRB8WZkNnzQ==/6670737045789525.mp3",
        "lrc_url": "",
        "artists": "杨千嬅",
        "provider": "http://music.163.com/"
      }]

    return (
      <header id="header">
        <div className="logo">
          <Link to="/note" title="立青作品">
            <img src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
          </Link>
        </div>
        <MenuList />
        <Player songs={songs}/>
        <ToolBar />
      </header>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
