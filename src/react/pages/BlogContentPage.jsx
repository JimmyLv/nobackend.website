import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import LoadingBar, { showLoading } from 'react-redux-loading-bar'

import { GITHUB, articleAction } from '../redux/actions/articleAction.js'
import MusicBox from '../components/Blog/MusicBox'
import BookInfo from '../components/Blog/BookInfo'
import SocialShare from '../components/Blog/SocialShare'
import ContentParser from '../components/Blog/ContentParser'
import './BlogContentPage.less'

class BlogContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auto: 0
    }
  }

  componentDidMount() {
    const { category, id } = this.props.params
    this.props.fetchPost(category, id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params !== this.props.params) {
      const { category, id } = this.props.params
      this.props.fetchPost(category, id)
    }
  }

  render() {
    const { meta, content } = this.props
    const { category, id } = this.props.params
    const filename = `_posts/${category}/${id}.md`
    const editUrl = `https://github.com/${GITHUB.user}/${GITHUB.repo}/edit/${GITHUB.branch}/${filename}`

    const SUB_TITLE = '最美博客'
    document.title = `${meta.title} | ${SUB_TITLE}`

    return (
      <div className="yue">
        <LoadingBar />
        <article className="col-md-12 aside3-article">
          <div className="article-header">
            <h1 id="#identifier">{meta.title}</h1>
            <div className="article-meta">
              <span className="words">{content.length} words</span>
              <a className="content-edit" href={editUrl} target="_blank">{filename}</a>
            </div>
            {meta.music ? <MusicBox musicUrl={`http://music.163.com/outchain/player?type=2&id=${meta.music}&auto=0&height=66`}/> : ''}
          </div>
          <div className="article-content">
            {meta.layout === 'book' ? meta.books.map((book, index) => <BookInfo key={index} book={book}/>) :
              <ContentParser layout={meta.layout} content={content}/>
            }
          </div>
          <div className="article-tags">
            {meta.tags.map((tag, index) => <Link key={index} to={`/pages/tags/${tag}`}>{tag}</Link>)}
          </div>
        </article>
        <hr/>
        <SocialShare meta={meta}/>
      </div>
    )
  }
}

BlogContent.propTypes = {
  params: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  fetchPost: PropTypes.func.isRequired
}
BlogContent.defaultProps = {}

function mapProps(state) {
  return {
    ...state.article,
    loadingBar: state.loadingBar
  }
}

function mapDispatch(dispatch) {
  return {
    fetchPost: (category, id) => {
      dispatch(articleAction(category, id))
      dispatch(showLoading())
    }
  }
}

export default connect(mapProps, mapDispatch)(BlogContent)