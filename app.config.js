const hljs = require('highlight.js');

export default function config(markedProvider, cfpLoadingBarProvider) {
  'ngInject';
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(lang, code, true).value;
      } else {
        return hljs.highlightAuto(code).value;
      }
    }
  });
  markedProvider.setRenderer({
    link: function (href, title, text) {
      return "<a href='" + href + "'" + (title ? " title='" + title + "'" : '') + " target='_blank'>" + text + "</a>";
    },
    heading: function (text, level) {
      return '<h' + level + ' id="' + text + '" class="anchor">'
        + text + '</h' + level + '>';
    }
  });

  cfpLoadingBarProvider.includeSpinner = false;
}