class MusicService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getPlayList(listId) {
    return this.$http.jsonp(`http://app.atime.me/music-api-server/?p=netease&t=playlist&i=${listId}&c=JSON_CALLBACK`, {
      cache: true
    })
  }
}

export default MusicService;