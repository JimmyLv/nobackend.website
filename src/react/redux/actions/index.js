import 'whatwg-fetch'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

export const GITHUB = {
  user: 'JimmyLv',
  repo: 'jimmy.lv',
  folder: '_posts',
  branch: 'gh-pages'
}

export const FETCH_MUSIC = 'FETCH_MUSIC'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'

export function fetchArticle(category, id) {
  const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.folder}`

  return (dispatch, getState) => {
    // just a temporary fix
    const location = getState().routing.locationBeforeTransitions.pathname
    if (getState().article.content !== 'hello' && location.includes(id)) {
      return
    }
    dispatch(showLoading())
    fetch(`${API_URL}/${category}/${id}.md`)
      .then(res => {
        if (res.ok) {
          return res.text()
        }
        throw res.error()
      })
      .then(content => {
        dispatch({
          type: FETCH_ARTICLE,
          content
        })
        dispatch(hideLoading())
      })
      .catch(error => console.info('request error: ', error))
  }
}

export function fetchArticleSummary() {
  return dispatch => fetch('https://blog.jimmylv.info/api/index.json')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res.error()
    })
    .then(articles => {
      dispatch({
        type: FETCH_ARTICLES,
        articles
      })
    })
    .catch(error => console.info('request error: ', error))
}

export function fetchMusicList() {
  return dispatch => fetch('http://app.atime.me/music-api-server/?p=netease&t=playlist&i=389445274')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res.error()
    })
    .then(json => {
      dispatch({
        type: FETCH_MUSIC,
        songs: json.songs
      })
    })
    .catch(error => console.info('request error: ', error))
}

export function toggleSideBarAction() {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export function toggleContent() {
  return {
    type: TOGGLE_CONTENT
  }
}