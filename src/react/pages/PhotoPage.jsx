import React, { Component, PropTypes, } from 'react'

class PhotoPage extends Component {
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

PhotoPage.propTypes = {
  children: PropTypes.object.isRequired
}
PhotoPage.defaultProps = {}

export default PhotoPage