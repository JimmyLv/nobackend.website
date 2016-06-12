import {
  Component,
  PropTypes,
} from 'react'

class BlogPage extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

BlogPage.propTypes = {}
BlogPage.defaultProps = {}

export default BlogPage
