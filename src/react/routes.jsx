import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import BlogHomePage from './pages/BlogHomePage'
import BlogContentPage from './pages/BlogContentPage'

import AppContainer from './containers/AppContainer'

import BlogContainer from './containers/BlogContainer'
import AppListPage from './pages/AppListPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'

const renderRoutes = () => (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to="/note-blog"/>
    <Route path="note-blog" component={BlogContainer}>
      <IndexRoute component={BlogHomePage}/>
      <Route path=":category/:id/" component={BlogContentPage}/>
    </Route>
    <Route path="app-list" component={AppListPage}/>
    <Route path="photo" component={PhotoPage}/>
    <Route path="*" component={NotFoundPage} onEnter={() => alert('This page has not ready yet!')}/>
  </Route>
)

export default renderRoutes