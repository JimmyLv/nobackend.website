import React, { Component, PropTypes, } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import ReactDisqus from 'react-disqus-thread'

import { articlesAction } from '../redux/actions/articlesAction'
import SideBar from '../components/Blog/SideBar'
import './BlogContainer.less'

class BlogPage extends Component {
  componentDidMount() {
    this.props.fetchArticles()
  }

  handleNewComment(comment) {
    console.log(comment.text)
  }

  render() {
    const { categories } = this.props.articles

    return (
      <div className="row">
        <SideBar categories={categories}/>
        <div className={classnames('col-md-8 col-xs-12 aside3', { 'm-hide': this.props.showContent })}>
          {React.cloneElement(this.props.children, { ...this.props })}
          <ReactDisqus
            shortname="nobackend-website"
            identifier="nobackend-website"
            title="Nobackend Website"
            onNewComment={this.handleNewComment.bind(this)}
          />
        </div>
      </div>
    )
  }
}

BlogPage.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  showContent: PropTypes.bool.isRequired
}
BlogPage.defaultProps = {}

function mapProps(state) {
  return {
    articles: state.articles,
    ...state.toggle
  }
}

function mapDispatch(dispatch) {
  return {
    fetchArticles: () => dispatch(articlesAction())
  }
}

export default connect(mapProps, mapDispatch)(BlogPage)