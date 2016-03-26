class MusicService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  get(musicId) {
    return this.$http.jsonp('http://app.atime.me/music-api-server/?p=netease&t=songlist&i=27853227&c=JSON_CALLBACK', {
      cache: true
    })
  }
}
 export default MusicService;