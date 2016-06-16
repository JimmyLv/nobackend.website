import React, { PropTypes } from 'react'
import { Link } from 'react-router'


const PostPanel = ({ postList, title }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">{title}</div>
    <div className="panel-body">
      {postList.map((post, index) => (
        <Link key={index} to={`/note-blog/${post.category}${post.url}`} className="list-group-item clearfix">
          {post.title}
          <span className="badge">{post.shortdate}</span>
        </Link>
      ))}
    </div>
  </div>
)

PostPanel.propTypes = {
  postList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default PostPanel