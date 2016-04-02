import toMarkdown from 'to-markdown';

class ZhihuService {
  constructor($http, configService) {
    'ngInject';

    this.$http = $http;
    this.configService = configService;
  }

  getTopAnswers() {
    const zhihu = this.configService.service('zhihu');
    const url = `${zhihu.endpoint}/userdetail/${zhihu.userId}`;

    return this.$http.get(url, {cache: true});
  }

  getAnswer(questionId, answerId) {
    const root = 'https://query.yahooapis.com/v1/public/yql';
    const url = `https://zhihu.com/question/${questionId}/answer/${answerId}`;
    const xpath = '//*[@id="zh-question-answer-wrap"]/div/div[3]/div[2]';
    const sql = encodeURIComponent(`select * from html where url='${url}' and xpath='${xpath}'`);
    const format = 'xml';
    const encodedUrl = `${root}?q=${sql}&format=${format}&env=store://datatables.org/alltableswithkeys`;

    return this.$http.get(encodedUrl, {cache: true}).then((res)=>{
      return toMarkdown(res.data);
    })
  }
}

export default ZhihuService;