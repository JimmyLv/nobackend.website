import jsyaml from 'js-yaml'

import { FETCH_ARTICLE } from '../actions/articleAction'

function _parseContent(separator, rawContent) {
  const splitResult = rawContent.split(separator)
  return {
    meta: jsyaml.load(splitResult[1]),
    content: splitResult.slice(2).join(separator)
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