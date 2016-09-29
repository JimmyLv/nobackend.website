class MusicService {
  constructor($http, configService) {
    'ngInject';

    this.$http = $http;
    this.configService = configService;
  }

  getPlayList(id) {
    return this.$http.get(this._url('collections',id), {
      cache: true
    })
  }

  getMusic(ids) {
    return this.$http.get(this._url('songlist',ids), {
      cache: true
    })
  }

  getAlbum(id) {
    return this.$http.get(this._url('album',id), {
      cache: true
    })
  }

  _url(type, id) {
    var music = this.configService.service('music');
    // return `${music.endpoint}/?p=${music.provider}&t=${type}&i=${id}`
    return `${music.endpoint}/music/${music.provider}/${type}/${id}`
  }
}

export default MusicService;