import React, { Component, PropTypes, } from 'react'
import { connect } from 'react-redux'
import ReactDisqus from 'react-disqus-thread'

import { articlesAction } from '../redux/actions/articlesAction'
import SideBar from '../components/Blog/SideBar'

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
      <div className="row yue">
        <SideBar categories={categories}/>
        <div className="col-md-8 col-xs-12 aside3">
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
  children: PropTypes.object.isRequired
}
BlogPage.defaultProps = {}

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

export default connect(mapProps, mapDispatch)(BlogPage)