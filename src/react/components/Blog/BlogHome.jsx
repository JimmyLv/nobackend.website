import React, { Component, PropTypes } from 'react'

import './BlogHome.less'
import './BlogList.less'
import './BlogContent.less'
import BlogHomeHeader from './BlogHeader'
import PostPanel from './PostPanel'

class BlogHome extends Component {
  componentDidMount() {
  }

  render() {
    const { tags, paginator } = this.props.articles
    const latestPostList = paginator.slice(0, 10)

    return (
      <div>
        <BlogHomeHeader/>
        <div className="col-md-12">
          <PostPanel title={'最新文章'} postList={latestPostList}/>
          {tags.slice(0, 3).map((tag, index) => <PostPanel key={index} title={tag.name} postList={tag.posts}/>)}
        </div>
      </div>
    )
  }
}

BlogHome.propTypes = {
  articles: PropTypes.object.isRequired
}
BlogHome.defaultProps = {}

export default BlogHome