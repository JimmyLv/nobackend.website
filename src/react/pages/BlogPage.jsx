import React, { Component, PropTypes, } from 'react'

class BlogPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

BlogPage.propTypes = {
  children: PropTypes.object.isRequired
}
BlogPage.defaultProps = {}

export default BlogPage
