import 'whatwg-fetch'

export const FETCH_ARTICLE = 'FETCH_ARTICLE'

export function articleAction(category, id) {
  const github = {
    user: 'JimmyLv',
    repo: 'jimmy.lv',
    folder: '_posts',
    branch: 'gh-pages'
  }
  const API_URL = `https://raw.githubusercontent.com/${github.user}/${github.repo}/${github.branch}/${github.folder}`

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
    })
    .catch(error => console.info('request error: ', error))
}