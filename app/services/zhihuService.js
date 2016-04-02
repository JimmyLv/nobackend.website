import toMarkdown from 'to-markdown';
import xpath from 'xpath';

const dom = require('xmldom').DOMParser;

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

    const sql = encodeURIComponent(`select * from html where url='${url}'`);
    const format = 'xml';
    const encodedUrl = `${root}?q=${sql}&format=${format}&env=store://datatables.org/alltableswithkeys`;

    return this.$http.get(encodedUrl, {cache: true}).then((res)=> {

      var doc = new dom().parseFromString(res.data);
      var nodes = xpath.select(`//*[@id="zh-question-answer-wrap"]/div/div[3]/div[2]`, doc);

      return nodes[0].toString()
        .replace(/<i class="icon-external"\/>/g, '')
        .replace(/<div class="zm-editable-content clearfix">/g, '')
        .replace(/<noscript>/g, '').replace(/<\/noscript>/g, '')
        .replace(/src="https:\/\/pic4.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic3.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic2.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic1.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="\/\/zhstatic.zhihu.com\/assets\/zhihu\/ztext\/whitedot.jpg"/g, 'style="display:none"');
    })
  }
}

export default ZhihuService;