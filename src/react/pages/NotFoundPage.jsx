import React, { Component, PropTypes, } from 'react'

class NotFoundPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>Hello AppList!</h2>
        {this.props.children}
      </div>
    )
  }
}

NotFoundPage.propTypes = {
  children: PropTypes.object.isRequired
}
NotFoundPage.defaultProps = {}

export default NotFoundPage
