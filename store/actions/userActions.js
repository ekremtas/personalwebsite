import Actions from './types'

export const getUserInfo = () => {
  return dispatch => {
    dispatch({
      type: Actions.GET_USER_INFO
    })
  }
}

export const setUserInfo = user => {
  return dispatch => {
    dispatch({
      type: Actions.SET_USER_INFO,
      payload: user
    })
  }
}
