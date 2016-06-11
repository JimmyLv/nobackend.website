import {
  Component,
  PropTypes,
} from 'react'

class BlogPage extends Component {
  render() {
    return (
      <div>
        <h2>Hello Blog!</h2>
        {this.props.children}
      </div>
    )
  }
}

BlogPage.propTypes = {}
BlogPage.defaultProps = {}

export default BlogPage
