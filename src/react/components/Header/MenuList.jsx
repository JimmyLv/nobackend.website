import React, { Component, PropTypes, } from 'react'
import { Link } from 'react-router'

class MenuList extends Component {
  constructor(props) {
    super(props)
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
    return (
      <div className="menu m-hide">
        {this.props.menuList.map((menu, index) => <Link key={index} to={menu.link}> {menu.name} </Link>)}
        {this.state.hasLoggedIn ? this.showMenuForUserLoggedIn() : ''}
        <a onClick={this.toggleUserLogin}>{this.state.hasLoggedIn ? this.state.username : 'Firebase'}</a>
        <a href="https://github.com/JimmyLv/nobackend.website" target="_blank">GitHub</a>
      </div>
    )
  }
}

MenuList.propTypes = {
  menuList: PropTypes.array.isRequired
}
MenuList.defaultProps = {
  menuList: [
    { name: 'Hello', link: '/hello' },
    { name: 'AppList', link: '/app-list' },
    { name: 'Blog', link: '/note-blog' },
    { name: 'Photo', link: '/photo' },
    { name: 'Zhihu', link: '/pages/zhihu' }
  ]
}

export default MenuList
