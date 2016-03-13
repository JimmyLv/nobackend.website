import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';

import marked from 'marked';
import ngMarked from 'angular-marked';

import config from './app.config';
import routing from './app.routes';
import running from './app.run';

import apps from './app/components/apps/apps'
import posts from './app/components/jekyll/posts'
import note from './app/components/note/note'
import aside1 from './app/components/note/aside1/aside1'
import aside2 from './app/components/note/aside2/aside2'
import aside3 from './app/components/note/aside3/aside3'
import books from './app/components/note/books/books'
import link from './app/components/note/link/link'
import nest from './app/components/note/nest/nest'
import post from './app/components/note/post/post'
import mainCtrl from './app/controllers/mainController'
import githubService from './app/services/githubService'

angular
  .module('app', [
    ngRoute,
    ngAnimate,
    ngSanitize,
    'ui.router',
    'ngNewRouter',
    'ab-base64',
    ngMarked,
    'angular-cache',
    'angularUtils.directives.dirDisqus',
    'angular-loading-bar',
    'angulartics',
    'angulartics.google.analytics',
    '720kb.socialshare',
    'ja.qr'
  ])
  .config(config)
  .config(routing)
  .run(running)
  .controller('MainCtrl', mainCtrl)
  .service('githubService', githubService)
  .component('post', post)
  .component('apps', apps)
  .component('posts', posts)
  .component('note', note)
  .component('aside1', aside1)
  .component('aside2', aside2)
  .component('aside3', aside3)
  .component('books', books)
  .component('postLink', link)
  .component('nest', nest);
