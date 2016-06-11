import ReactDOM from 'react-dom'

import '../../node_modules/font-awesome-animation/dist/font-awesome-animation.css'
import '../../node_modules/font-awesome/css/font-awesome.css'
import 'bootstrap.css'
import 'yue.css'

import renderRoutes from './routes'

ReactDOM.render(renderRoutes(), document.getElementById('app'))