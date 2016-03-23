import angular from 'angular';

import githubService from './githubService'

export default angular.module('app.services', [])
  .service('githubService', githubService);