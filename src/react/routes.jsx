import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect,
  hashHistory
} from 'react-router'

import BlogHome from './components/BlogHome'

import AppContainer from './containers/AppContainer'

import BlogPage from './pages/BlogPage'
import AppListPage from './pages/AppListPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'

const renderRoutes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRedirect to="/note-blog"/>
      <Route path="note-blog" component={BlogPage}>
        <IndexRoute component={BlogHome}/>
      </Route>
      <Route path="app-list" component={AppListPage}/>
      <Route path="photo" component={PhotoPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
)

export default renderRoutes