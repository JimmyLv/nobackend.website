import xpath from 'xpath'
const DOMParser = require('xmldom').DOMParser

class ZhihuService {
  constructor($http, configService) {
    'ngInject'

    this.$http = $http
    this.configService = configService
  }

  getTopAnswers() {
    const zhihu = this.configService.service('zhihu')
    const userUrl = `https://www.zhihu.com/people/${zhihu.userId}/answers?order_by=vote_num`

    return this.$http.get(this._encodeUrl(userUrl), { cache: true }).then(res => {

      var doc = new DOMParser().parseFromString(res.data)
      var nodes = xpath.select(`//*[@class="zm-item"]`, doc)
      var topAnswers = nodes.map(element => {
        var item = new DOMParser().parseFromString(element.toString())
        const title = xpath.select(`//*[@class="question_link"]/text()`, item)
        const href = xpath.select(`//*[@class="question_link"]/@href`, item)
        const vote = xpath.select(`//*[@class="zm-item-vote"]/a/text()`, item)
        const date = xpath.select(`//*[@class="visible-expanded"]/a/text()`, item)

        return {
          title: title.toString(),
          link: href[0].value,
          agree: vote.toString(),
          date: date.toString().split(' ')[1]
        }
      })

      return {
        topanswers: topAnswers
      }
    })
  }

  getAnswer(questionId, answerId) {
    const url = `https://zhihu.com/question/${questionId}/answer/${answerId}`

    return this.$http.get(this._encodeUrl(url), { cache: true }).then((res)=> {

      var doc = new DOMParser().parseFromString(res.data)
      var nodes = xpath.select(`//*[@id="zh-question-answer-wrap"]/div/div[3]/div[2]`, doc)

      return nodes[0].toString()
        .replace(/<i class="icon-external"\/>/g, '')
        .replace(/<div class="zm-editable-content clearfix">/g, '')
        .replace(/<noscript>/g, '').replace(/<\/noscript>/g, '')
        .replace(/src="https:\/\/pic4.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic3.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic2.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="https:\/\/pic1.zhimg.com\//g, 'src="https://pic.zhimg.com/')
        .replace(/src="\/\/zhstatic.zhihu.com\/assets\/zhihu\/ztext\/whitedot.jpg"/g, 'style="display:none"')
    })
  }

  _encodeUrl(url) {
    const root = this.configService.service('yql').endpoint
    const sql = encodeURIComponent(`select * from html where url='${url}'`)

    return `${root}?q=${sql}&format=xml&env=store://datatables.org/alltableswithkeys`
  }
}

export default ZhihuService