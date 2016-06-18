import { TOGGLE_SIDEBAR, TOGGLE_CONTENT } from '../actions/toggleAction'

const initialToggleState = {
  showSideBar: true,
  showContent: true
}

function articlesReducer(state = initialToggleState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { showSideBar: !state.showSideBar }
    case TOGGLE_CONTENT:
      return { showContent: !state.showContent }
    default:
      return state
  }
}

export default articlesReducer