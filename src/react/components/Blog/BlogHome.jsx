import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import filter from 'lodash/filter'

import './BlogHome.less'
import './SideBar.less'
import './BlogList.less'
import './BlogContent.less'
import BlogHomeHeader from './BlogHomeHeader'
import PostPanel from './PostPanel'

import { articlesAction } from '../../redux/actions/articlesAction'

class BlogHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: '思考'
    }
    this.selectCategory = this.selectCategory.bind(this)
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  selectCategory(category) {
    this.setState({
      selectedCategory: category
    })
  }

  render() {
    const { articles } = this.props
    const { categories, tags, paginator } = articles
    const latest = paginator.slice(0, 10)
    const categoryWithPosts = filter(categories, { name: this.state.selectedCategory })[0]

    return (
      <div className="row yue">
        <div className="col-md-4 col-xs-12 nav-aside">
          <div className="col-md-3 col-xs-3 aside1">
            <div className="nav">
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
                <Link key={index} className="list-group-item" to={`/note-blog/category/${post.category}/post${post.url}`}>
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12 aside3">
          <BlogHomeHeader />
          <div className="col-md-12">
            <PostPanel title={'最新文章'} postList={latest}/>
            {tags.slice(0, 3).map((tag, index) => <PostPanel key={index} title={tag.name} postList={tag.posts}/>)}
          </div>
        </div>
      </div>
    )
  }
}

BlogHome.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchArticles: PropTypes.func.isRequired
}
BlogHome.defaultProps = {}

function mapProps(state) {
  return {
    articles: state.articles
  }
}

function mapDispatch(dispatch) {
  return {
    fetchArticles: () => dispatch(articlesAction())
  }
}

export default connect(mapProps, mapDispatch)(BlogHome)