import { AUTH_SIGNIN, AUTH_SIGNOUT } from './types'

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

export const SignOut = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('clientToken')
  return {
    type: AUTH_SIGNOUT
  }
}
