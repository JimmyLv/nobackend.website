import {
  Component,
  PropTypes,
} from 'react'
import { Link } from 'react-router'

class MenuList extends Component {
  constructor() {
    super()
    this.toggleUserLogin = this.toggleUserLogin.bind(this)
    this.state = {
      hasLoggedIn: false
    }
  }

  toggleUserLogin() {
    this.setState({
      hasLoggedIn: !this.state.hasLoggedIn,
      username: 'JimmyLv'
    })
  }

  showMenuForUserLoggedIn() {
    return (
      <span>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/users">Users</Link>
      </span>
    )
  }

  render() {
    const menuList = [
      { name: 'Hello', link: '/hello' },
      { name: 'AppList', link: '/app-list' },
      { name: 'Blog', link: '/note-blog' },
      { name: 'Photo', link: '/photo' },
      { name: 'Zhihu', link: '/pages/zhihu' }
    ]
    return (
      <div className="menu m-hide">
        {menuList.map((menu, index) => <Link key={index} to={menu.link}> {menu.name} </Link>)}
        {this.state.hasLoggedIn ? this.showMenuForUserLoggedIn() : ''}
        <a onClick={this.toggleUserLogin}>{ this.state.hasLoggedIn ? this.state.username : 'Firebase' }</a>
        <a href="https://github.com/JimmyLv/nobackend.website" target="_blank">GitHub</a>
      </div>
    )
  }
}

MenuList.propTypes = {}
MenuList.defaultProps = {}

export default MenuList
