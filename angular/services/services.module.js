import configService from './configService'
import githubService from './githubService'
import musicService from './musicService'
import zhihuService from './zhihuService'

export default angular.module('app.services', [])
  .service('configService', configService)
  .service('githubService', githubService)
  .service('zhihuService', zhihuService)
  .service('musicService', musicService);