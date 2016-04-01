class ZhihuService {
  constructor($http, configService) {
    'ngInject';

    this.$http = $http;
    this.configService = configService;
  }

  getTopAnswers() {
    var zhihu = this.configService.service('zhihu');
    var url = `${zhihu.endpoint}/userdetail/${zhihu.userId}`;

    return this.$http.get(url, {cache: true});
  }
}

export default ZhihuService;