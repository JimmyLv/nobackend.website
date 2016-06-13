import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'

import BlogHome from './components/Blog/BlogHome'

import AppContainer from './containers/AppContainer'

import BlogPage from './pages/BlogPage'
import AppListPage from './pages/AppListPage'
import PhotoPage from './pages/PhotoPage'
import NotFoundPage from './pages/NotFoundPage'

const renderRoutes = () => (
  <Route path="/" component={AppContainer}>
    <IndexRedirect to="/note-blog"/>
    <Route path="note-blog" component={BlogPage}>
      <IndexRoute component={BlogHome}/>

    </Route>
    <Route path="app-list" component={AppListPage}/>
    <Route path="photo" component={PhotoPage}/>
    <Route path="*" component={NotFoundPage} onEnter={() => alert('This page has not ready yet!')}/>
  </Route>
)

export default renderRoutes

//
// <Route path="category/:category" component={BlogCategory}>
//   <Route path="post/:id" component={BlogPost}/>
//   </Route>