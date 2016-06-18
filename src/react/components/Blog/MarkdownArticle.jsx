import React, { Component, PropTypes } from 'react'

import marked from 'marked'
import hljs from 'highlight.js'
import 'hightlight.css'

class MarkdownArticle extends Component {
  constructor(props) {
    super(props)

    const renderer = new marked.Renderer()
    renderer.link = (href, title, text) =>
      `<a href="${href}" ${title ? `title="${title}"` : ''} target="_blank">${text}</a>`
    renderer.blockquote = (quote) => {
      if (quote.indexOf('<blockquote>') > -1) {
        return `<blockquote class="english-ref">${quote}</blockquote>`
      }
      return `<blockquote>${quote}</blockquote>`
    }
    renderer.heading = (text, level) => {
      const [englishTitle, chineseTitle] = text.split(' | ')
      return chineseTitle === undefined ? `<h${level}>${englishTitle}</h${level}>` :
        `<h${level}><span class="english-title">${englishTitle} | </span>${chineseTitle}</h${level}>`
    }

    marked.setOptions({
      renderer,
      gfm: true,
      tables: true,
      highlight(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code, true).value
        }
        return hljs.highlight('javascript', code).value
      }
    })
    this.state = {
      auto: 0
    }
  }

  render() {
    const { layout, content } = this.props
    return (
      <div id="content-page" className={layout === 'photo' ? 'photo' : ''}>
        <div dangerouslySetInnerHTML={{ __html: marked(content || '') }}></div>
      </div>
    )
  }
}

MarkdownArticle.propTypes = {
  layout: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
MarkdownArticle.defaultProps = {}

export default MarkdownArticle
