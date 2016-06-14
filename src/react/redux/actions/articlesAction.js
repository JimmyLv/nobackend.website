import 'whatwg-fetch'

export const FETCH_ARTICLE = 'FETCH_ARTICLE'

export function articlesAction() {
  return dispatch => fetch('https://blog.jimmylv.info/api/index.json')
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res.error()
    })
    .then(json => {
      dispatch({
        type: FETCH_ARTICLE,
        payload: json
      })
    })
    .catch(error => console.info('request error: ', error))
}