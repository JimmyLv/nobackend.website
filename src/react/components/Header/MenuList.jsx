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
    const { menuList, selectedUrl } = this.props
    const { hasLoggedIn, username } = this.state
    return (
      <div className="menu m-hide">
        {menuList.map((menu, index) => <Link key={index} className={menu.link === selectedUrl ? 'active' : ''} to={menu.link}> {menu.name} </Link>)}
        {hasLoggedIn ? this.showMenuForUserLoggedIn() : ''}
        <a onClick={this.toggleUserLogin}>{hasLoggedIn ? username : 'Firebase'}</a>
        <a href="https://github.com/JimmyLv/nobackend.website" target="_blank">GitHub</a>
      </div>
    )
  }
}

MenuList.propTypes = {
  menuList: PropTypes.array.isRequired,
  selectedUrl: PropTypes.array.isRequired
}
MenuList.defaultProps = {}

export default MenuList
