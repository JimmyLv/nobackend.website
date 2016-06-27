import jsyaml from 'js-yaml'

import { FETCH_ARTICLE } from '../actions/articleAction'

function _parseContent(separator, rawContent) {
  const result = rawContent.split(separator)
  return {
    meta: jsyaml.load(result[1]),
    content: result.slice(2).join(separator)
  }
}

function articleReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE:
      return { ..._parseContent('---', action.payload) }
    default:
      return state
  }
}

export default articleReducer