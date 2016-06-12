import { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import filter from 'lodash/filter'

import './BlogHome.less'
import './SideBar.less'
import './BlogContent.less'
import BlogHomeHeader from './BlogHomeHeader'
import PostPanel from './PostPanel'

class BlogHome extends Component {
  render() {
    const { categories, latest, tags }= this.props.articles
    const category = filter(categories, { name: '思考' })[0]
    console.info(category)

    return (
      <div className="row yue">
        <div className="col-md-4 col-xs-12 nav-aside">
          <div className="col-md-3 col-xs-3 aside1">
            <div className="nav">
              {categories.map((category, index) => <li className="{'active': nav.id === $ctrl.selectedNav}">
                <Link key={index} to={`/note-blog/category/${ category.name }`}>
                  {category.name}
                </Link>
              </li>)}
            </div>

            <div className="aside1-bottom">
              <a href="{{ $ctrl.rssUrl }}" target="_blank">
                <i className="fa fa-rss fa-2x"/>
              </a>
              <a href="mailto:{{ $ctrl.email }}">
                <i className="fa fa-envelope-o fa-2x"/>
              </a>
            </div>
          </div>
          <div className="col-md-9 col-xs-9 aside2">
            <div className="list-group">
              {category.posts.map((post, index)=> (
                <Link key={index} to={`/note-blog/category/${ post.category }/post${ post.url }`}
                      className="list-group-item">
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8 col-xs-12 aside3">
          <BlogHomeHeader />
          <div className="col-md-12">
            <PostPanel title={'最新文章'} postList={latest}/>
            {tags.map(tag => <PostPanel title={tag.name} postList={tag.posts}/>)}
          </div>
        </div>
      </div>
    )
  }
}

BlogHome.propTypes = {
  articles: PropTypes.object.isRequired
}
BlogHome.defaultProps = {
  articles: {
    "categories": [
      {
        "name": "摄影",
        "posts": [
          {
            "id": "/wallpaper-by-liqing-01",
            "title": "吕立青拍的壁纸系列（一）",
            "category": "摄影",
            "url": "/2015-07-23-wallpaper-by-liqing-01/",
            "shortdate": "July 23, 2015"
          }]
      },

      {
        "name": "思考",
        "posts": [
          {
            "id": "/write-in-mac-os-x",
            "title": "写作系统：Mac OS X 环境下的各种最优配置",
            "category": "思考",
            "url": "/2016-06-11-write-in-mac-os-x/",
            "shortdate": "June 11, 2016"
          },
          {
            "id": "/about-choice-time-and-attention",
            "title": "随笔：关于选择、时间和注意力",
            "category": "思考",
            "url": "/2016-06-10-about-choice-time-and-attention/",
            "shortdate": "June 10, 2016"
          }]
      }
    ],
    "tags": [
      {
        "name": "摄影",
        "size": "5",
        "posts": [
          {
            "id": "/Rails-Girls-internal-version",
            "title": "看介里！Rails Girls成都站活动总结火热来袭~",
            "category": "摄影",
            "url": "/2015-09-15-Rails-Girls-internal-version/",
            "shortdate": "September 15, 2015"
          },
          {
            "id": "/wallpaper-by-liqing-01",
            "title": "吕立青拍的壁纸系列（一）",
            "category": "摄影",
            "url": "/2015-07-23-wallpaper-by-liqing-01/",
            "shortdate": "July 23, 2015"
          }]
      },
      {
        "name": "React",
        "size": "13",
        "posts": [
          {
            "id": "/working-with-reactjs-in-webstorm",
            "title": "【译】在 Webstorm 中使用 ReactJS：编码辅助、代码规范、重构以及编译",
            "category": "翻译",
            "url": "/2016-05-18-working-with-reactjs-in-webstorm/",
            "shortdate": "May 18, 2016"
          },
          {
            "id": "/Redux-and-The-Command-Pattern",
            "title": "【译】Redux 和 命令模式",
            "category": "翻译",
            "url": "/2016-04-19-Redux-and-The-Command-Pattern/",
            "shortdate": "April 19, 2016"
          },
          {
            "id": "/react-v15-the-big-and-great-latest-version",
            "title": "【译】Facebook 正式发布 ReactJS v15.0 稳定版",
            "category": "翻译",
            "url": "/2016-04-08-react-v15-the-big-and-great-latest-version/",
            "shortdate": "April 08, 2016"
          },
          {
            "id": "/Chinese-Version-of-React.js-Best-Practices-for-2016",
            "title": "【译】展望2016，React.js 最佳实践",
            "category": "前端",
            "url": "/2016-02-21-Chinese-Version-of-React.js-Best-Practices-for-2016/",
            "shortdate": "February 21, 2016"
          },
          {
            "id": "/React.js-Best-Practices-for-2016",
            "title": "【译】展望2016，React.js 最佳实践 (中英对照版)",
            "category": "翻译",
            "url": "/2016-01-22-React.js-Best-Practices-for-2016/",
            "shortdate": "January 22, 2016"
          },
          {
            "id": "/reactjs_tutorial_part_4",
            "title": "【译】React.js教程 第四部分：Express路由",
            "category": "翻译",
            "url": "/2015-09-27-reactjs_tutorial_part_4/",
            "shortdate": "September 27, 2015"
          }]
      }
    ],
    "latest": [
      {
        "id": "/write-in-mac-os-x",
        "title": "写作系统：Mac OS X 环境下的各种最优配置",
        "category": "思考",
        "tags": "写作, Mac, 学习, PKM, 个人成长, 敏捷, 效率",
        "url": "/2016-06-11-write-in-mac-os-x/",
        "path": "_posts/思考/2016-06-11-write-in-mac-os-x.md",
        "date": "2016-06-11 00:00:00 +0000",
        "shortdate": "June 11, 2016"
      },
      {
        "id": "/thirteen-steps-to-a-faster-web-app",
        "title": "【译】唯快不破：Web 应用的 13 个优化步骤",
        "category": "翻译",
        "tags": "Web, FED, Optimization, JavaScript",
        "url": "/2016-06-10-thirteen-steps-to-a-faster-web-app/",
        "path": "_posts/翻译/2016-06-10-thirteen-steps-to-a-faster-web-app.md",
        "date": "2016-06-10 00:00:00 +0000",
        "shortdate": "June 10, 2016"
      },
      {
        "id": "/about-choice-time-and-attention",
        "title": "随笔：关于选择、时间和注意力",
        "category": "思考",
        "tags": "互联网, 人性",
        "url": "/2016-06-10-about-choice-time-and-attention/",
        "path": "_posts/思考/2016-06-10-about-choice-time-and-attention.md",
        "date": "2016-06-10 00:00:00 +0000",
        "shortdate": "June 10, 2016"
      }]
  }
}

export default BlogHome
