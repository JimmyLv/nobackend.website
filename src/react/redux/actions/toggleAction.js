export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'

export function toggleSideBarAction() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function toggleContentAction() {
  return {
    type: TOGGLE_CONTENT
  }
}