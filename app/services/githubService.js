const github = {
  apiUrl: 'https://api.github.com',
  token: '',
  userName: 'JimmyLv',
  repoName: 'jimmy.lv',
  branch: 'gh-pages'
};

class GitHubService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  _read(filename) {
    return this.$http.get(_url(filename), {
      cache: true
    })
  }

  getPost(category, post) {
    return this._read('_posts/' + category + '/' + post + '.md')
  }

  getConfig() {
    return this._read('_config.yml')
  }

  getIndex() {
    return this.$http.get('http://blog.jimmylv.info/api/index.json', {cache: true})
  }
}

function _url(path) {
  var baseUrl = github.apiUrl + '/repos/' + github.userName + '/' + github.repoName + '/contents/';
  var url = baseUrl + path + '?ref=' + github.branch;
  return github.token === '' ? url : url + '&access_token=' + github.token;
}

function _rawUrl(path) {
  var baseUrl = 'https://raw.githubusercontent.com/' + github.userName + '/' + github.repoName + '/' + github.branch;
  return baseUrl + path;
}

export default GitHubService;