import githubService from './githubService'
import musicService from './musicService'

export default angular.module('app.services', [])
  .service('githubService', githubService)
  .service('musicService', musicService);