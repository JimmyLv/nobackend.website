import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import filter from 'lodash/filter'

import './SideBar.less'

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: this.props.selectedCategory
    }
    this.selectCategory = this.selectCategory.bind(this)
  }

  selectCategory(categoryName) {
    this.setState({
      selectedCategory: categoryName
    })
  }

  render() {
    const { categories } = this.props
    const categoryWithPosts = filter(categories, { name: this.state.selectedCategory })[0]

    return (
      <div className="col-md-4 col-xs-12 nav-sidebar">
        <div className="col-md-3 col-xs-3 aside1">
          <div className="nav aside1-nav">
            {categories.map((category, index) => (
              <li key={index} className={category.name === this.state.selectedCategory ? 'active' : ''}>
                <a onClick={() => this.selectCategory(category.name)}>
                  {category.name}
                </a>
              </li>
            ))}
          </div>
          <div className="aside1-bottom">
            <a href="{{ $ctrl.rssUrl }}" target="_blank">
              <i className="fa fa-rss fa-2x"/>
            </a>
            <a href="mailto:{{ $ctrl.email }}">
              <i className="fa fa-envelope-o fa-2x"/>
            </a>
          </div>
        </div>
        <div className="col-md-9 col-xs-9 aside2">
          <div className="list-group">
            {categoryWithPosts.posts.map((post, index) => (
              <Link key={index} className="list-group-item" to={`/note-blog/${post.category}${post.url}`}>
                {post.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

SideBar.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
}
SideBar.defaultProps = {
  selectedCategory: '思考'
}

export default SideBar
