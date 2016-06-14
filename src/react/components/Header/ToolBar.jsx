import React, { Component } from 'react'

class ToolBar extends Component {
  constructor(props) {
    super(props)
    this.clearSearch = this.clearSearch.bind(this)
    this.randomPost = this.randomPost.bind(this)
  }

  clearSearch() {
    this.refs.searchText.value = ''
  }

  randomPost() {
    alert('randomPost')
  }

  render() {
    return (
      <div className="tool-bar">
        <input className="default-search m-hide" ref="searchText" placeholder="Search..." type="text"/>
        <span className="cancel-search m-hide" onClick={this.clearSearch}><i className="fa fa-times"/></span>
        <span className="random-post"><a onClick={this.randomPost}>随机文章</a></span>
      </div>
    )
  }
}

ToolBar.propTypes = {}
ToolBar.defaultProps = {}

export default ToolBar
