import jsyaml from 'js-yaml'

import { FETCH_ARTICLE } from '../actions'

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
      return {
        id: action.id,
        ..._parseContent('---', action.content)
      }
    default:
      return state
  }
}

export default articleReducer