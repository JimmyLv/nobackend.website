import React, { Component, PropTypes } from 'react'

import HomeHeader from '../components/Blog/HomeHeader'
import PostPanel from '../components/Blog/PostPanel'
import './BlogHomePage.less'

class BlogHomePage extends Component {
  componentDidMount() {
  }

  render() {
    const { tags, paginator } = this.props.articles
    const latestPostList = paginator.slice(0, 10)

    return (
      <div>
        <HomeHeader/>
        <div className="col-md-12">
          <PostPanel title={'最新文章'} postList={latestPostList}/>
          {tags.slice(0, 3).map((tag, index) => <PostPanel key={index} title={tag.name} postList={tag.posts}/>)}
        </div>
      </div>
    )
  }
}

BlogHomePage.propTypes = {
  articles: PropTypes.object.isRequired
}
BlogHomePage.defaultProps = {}

export default BlogHomePage