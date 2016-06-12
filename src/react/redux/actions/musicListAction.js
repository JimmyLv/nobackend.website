export const FETCH_MUSIC = 'FETCH_MUSIC'

export function musicListAction() {
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
        payload: json.songs
      })
    })
    .catch(error => console.info('request error: ', error))
}