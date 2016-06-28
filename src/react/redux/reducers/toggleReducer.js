import { TOGGLE_SIDEBAR, TOGGLE_CONTENT } from '../actions'

const initialToggleState = {
  showSideBar: true,
  showContent: true
}

function articlesReducer(state = initialToggleState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, showSideBar: !state.showSideBar }
    case TOGGLE_CONTENT:
      return { ...state, showContent: !state.showContent }
    default:
      return state
  }
}

export default articlesReducer