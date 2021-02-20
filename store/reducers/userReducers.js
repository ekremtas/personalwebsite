import Actions from '../actions/types'

const initialState = {
  user: {name: 'name is empty', surname: 'surname is empty'}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_USER_INFO:
      return {
        user: {name: 'EKrem', surname: 'TAŞ'}
      }
    case Actions.SET_USER_INFO:
      return {
        user: action.payload
      }
    default:
      return state
  }
}

export default userReducer
