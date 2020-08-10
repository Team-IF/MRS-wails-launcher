import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/auth'

const App = ({ children }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const _accessToken = localStorage.getItem('accessToken')
    const _clientToken = localStorage.getItem('clientToken')
    const _userName = localStorage.getItem('userName')
    const _userID = localStorage.getItem('userID')

    const fetch = async () => {
      try {
        await Axios.post(
          'https://thingproxy.freeboard.io/fetch/https://authserver.mojang.com/validate',
          {
            accessToken: _accessToken,
            clientToken: _clientToken
          }
        )
        dispatch(actions.SignIn(_accessToken, _clientToken))
        dispatch(actions.SetUserInfo(_userName, _userID))
      } catch (error) {
        console.log('Try Refresh')
        try {
          const res = await Axios.post(
            'https://thingproxy.freeboard.io/fetch/https://authserver.mojang.com/refresh',
            {
              accessToken: _accessToken,
              clientToken: _clientToken
            }
          )
          const {
            accessToken,
            clientToken,
            selectedProfile: { name, id }
          } = res.data
          dispatch(actions.SignIn(accessToken, clientToken))
          dispatch(actions.SetUserInfo(name, id))
        } catch (error) {
          console.log('Sign Out')
          dispatch(actions.SignOut())
        }
      }
      setLoading(false)
    }
    if (_accessToken != null && _clientToken != null) {
      fetch()
    } else {
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <div>로딩중</div>
  }
  return <div>{children}</div>
}

export default App
