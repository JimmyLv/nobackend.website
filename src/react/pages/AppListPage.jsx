import React, { Component, PropTypes, } from 'react'

class AppListPage extends Component {
  componentWillMount() {
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

AppListPage.propTypes = {
  children: PropTypes.object.isRequired
}
AppListPage.defaultProps = {}

export default AppListPage
