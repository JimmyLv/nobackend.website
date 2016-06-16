import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { articleAction } from '../../redux/actions/articleAction.js'

class BlogContent extends Component {
  componentDidMount() {
    const { category, id } = this.props.params
    this.props.fetchPost(category, id)
  }

  render() {
    const { category, id } = this.props.params
    return (
      <div><h1>{category}{id}</h1>
        <article>
          <blockquote>{JSON.stringify(this.props.meta)}</blockquote>
          {this.props.content}
        </article>
      </div>
    )
  }
}

BlogContent.propTypes = {
  params: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
  fetchPost: PropTypes.func.isRequired
}
BlogContent.defaultProps = {}

function mapProps(state) {
  return { ...state.article }
}

function mapDispatch(dispatch) {
  return {
    fetchPost: (category, id) => dispatch(articleAction(category, id))
  }
}

export default connect(mapProps, mapDispatch)(BlogContent)