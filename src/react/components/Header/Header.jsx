import {
  Component,
  PropTypes,
} from 'react'
import { Link } from 'react-router'

import './Header.less'
import MenuList from './MenuList'
import ToolBar from './ToolBar'

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="logo">
          <Link to="/note" title="立青作品">
            <img src="//o7mw3gkkh.qnssl.com/images/2016/1465649945502.png"/>
          </Link>
        </div>
        <MenuList />
        <ToolBar />
      </header>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
