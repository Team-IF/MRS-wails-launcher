import { AUTH_SIGNIN, AUTH_SIGNOUT, AUTH_SETINFO } from './types'

export const SignIn = (accessToken, clientToken) => {
  localStorage.setItem('accessToken', accessToken)
  localStorage.setItem('clientToken', clientToken)
  return {
    type: AUTH_SIGNIN,
    payload: {
      accessToken,
      clientToken
    }
  }
}

export const SetUserInfo = (userName, userID) => {
  return {
    type: AUTH_SETINFO,
    payload: {
      userName,
      userID
    }
  }
}

export const SignOut = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('clientToken')
  return {
    type: AUTH_SIGNOUT
  }
}
