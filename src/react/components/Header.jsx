import {
  Component,
  PropTypes,
} from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    var styles = {
      list: {
        display: 'inline'
      }
    }
    const menuList = [
      { name: 'AppList', link: '/app-list' },
      { name: 'Blog', link: '/note-blog' },
      { name: 'Photo', link: '/photo' }
    ]
    return (
      <ul role="nav">
        {menuList.map((menu, index) => (
          <li key={index} style={styles.list}><Link to={menu.link}> {menu.name} </Link></li>
        ))}
      </ul>
    )
  }
}

Header.propTypes = {}
Header.defaultProps = {}

export default Header
