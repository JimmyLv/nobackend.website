import 'whatwg-fetch'
import { hideLoading } from 'react-redux-loading-bar'

export const FETCH_ARTICLE = 'FETCH_ARTICLE'

export const GITHUB = {
  user: 'JimmyLv',
  repo: 'jimmy.lv',
  folder: '_posts',
  branch: 'gh-pages'
}

export function articleAction(category, id) {
  const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.folder}`

  return dispatch => fetch(`${API_URL}/${category}/${id}.md`)
    .then(res => {
      if (res.ok) {
        return res.text()
      }
      throw res.error()
    })
    .then(content => {
      dispatch({
        type: FETCH_ARTICLE,
        payload: content
      })
      dispatch(hideLoading())
    })
    .catch(error => console.info('request error: ', error))
}