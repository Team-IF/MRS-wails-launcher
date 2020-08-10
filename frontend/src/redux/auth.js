import { AUTH_SIGNIN, AUTH_SIGNOUT, AUTH_SETINFO } from '../actions/types'

const DEFAULT_STATE = {
  accessToken: '',
  clientToken: '',
  isAuth: false,
  userName: '',
  userID: ''
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case AUTH_SIGNOUT:
      return {
        ...DEFAULT_STATE,
        isAuth: false
      }
    case AUTH_SIGNIN:
      return {
        ...state,
        isAuth: true,
        accessToken: action.payload.accessToken,
        clientToken: action.payload.clientToken
      }
    case AUTH_SETINFO:
      return {
        ...state,
        userName: action.payload.userName,
        userID: action.payload.userID
      }
    default:
      return {
        state
      }
  }
}
