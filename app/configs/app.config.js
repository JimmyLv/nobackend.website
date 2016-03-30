import '../../assets/styles/hightlight.css'
import hljs from 'highlight.js'

export default function config(markedProvider, cfpLoadingBarProvider) {
  "ngInject";

  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });

  markedProvider.setRenderer({
    link(href, title, text) {
      return `<a href="${href}" ${title ? 'title="' + title + '"' : ''} target="_blank">${text}</a>`;
    },
    heading(text, level) {
      return `<h${level} id="${text}" class="anchor">${text}</h${level}>`;
    }
  });

  cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  cfpLoadingBarProvider.spinnerTemplate = `<div class="uac-loader uac-loader-sail"><span></span><span></span><span></span><span></span></div>`;
}