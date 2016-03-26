class MusicService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  getPlayList(id) {
    return this.$http.jsonp(_url('playlist',id), {
      cache: true
    })
  }

  getMusic(ids) {
    return this.$http.jsonp(_url('songlist',ids), {
      cache: true
    })
  }

  getAlbum(id) {
    return this.$http.jsonp(_url('album',id), {
      cache: true
    })
  }
}

function _url(type, id) {
  return `http://app.atime.me/music-api-server/?p=netease&t=${type}&i=${id}&c=JSON_CALLBACK`
}

export default MusicService;