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
export const FETCH_ARTICLE_SUMMARY = 'FETCH_ARTICLE_SUMMARY'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'

function shouldFetchArticle(state, id) {
  if (state.article.id && state.article.id === id) {
    return false
  }

  return true
}

function receiveArticle(content, id) {
  return {
    type: FETCH_ARTICLE,
    id,
    content
  }
}

function fetchArticle(category, id) {
  const API_URL = `https://raw.githubusercontent.com/${GITHUB.user}/${GITHUB.repo}/${GITHUB.branch}/${GITHUB.folder}`

  return dispatch => {
    dispatch(showLoading())
    return fetch(`${API_URL}/${category}/${id}.md`)
      .then(res => {
        if (res.ok) {
          return res.text()
        }
        throw res.error()
      })
      .then(content => {
        dispatch(hideLoading())
        return dispatch(receiveArticle(content, id))
      })
      .catch(error => console.info('request error: ', error))
  }
}

export function fetchArticleIfNeeded(category, id) {
  return (dispatch, getState) => {
    if (shouldFetchArticle(getState(), id)) {
      return dispatch(fetchArticle(category, id))
    }
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
        type: FETCH_ARTICLE_SUMMARY,
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