const github = {
  apiUrl: 'https://api.github.com',
  token: '',
  userName: 'JimmyLv',
  repoName: 'jimmy.lv',
  branch: 'gh-pages'
};

class GitHubService {
  constructor($http, configService) {
    'ngInject';

    this.$http = $http;
    this.github = configService.config;
    console.info('config from _config.yml:', this.github);
  }

  read(filename) {
    return this.$http.get(_rawUrl(filename), {
      cache: true
    })
  }

  getPost(category, post) {
    return this.read(`_posts/${category}/${post}.md`)
  }

  getConfig() {
    return this.read('_config.yml')
  }

  getIndex() {
    return this.$http.get('http://blog.jimmylv.info/api/index.json', {cache: true})
  }
}

function _url(path) {
  const url = `${github.apiUrl}/repos/${github.userName}/${github.repoName}/contents/${path}?ref=${github.branch}`;
  return github.token === '' ? url : `${url}&access_token=${github.token}`;
}

function _rawUrl(path) {
  return `https://raw.githubusercontent.com/${github.userName}/${github.repoName}/${github.branch}/${path}`;
}

export default GitHubService;