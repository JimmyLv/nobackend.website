import configService from './configService'
import githubService from './githubService'
import musicService from './musicService'

export default angular.module('app.services', [])
  .service('configService', configService)
  .service('githubService', githubService)
  .service('musicService', musicService);