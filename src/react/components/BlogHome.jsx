import { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Hello Note Home!</h3>
        <ul>
          <li>post 1</li>
          <li>post 2</li>
          <li>post 3</li>
        </ul>
      </div>
    )
  }
}

Home.propTypes = {}
Home.defaultProps = {}

export default Home
