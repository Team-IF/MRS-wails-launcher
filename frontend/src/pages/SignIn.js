import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/auth'
import bg from '../assets/images/bg.png'
import { Redirect } from 'react-router-dom'

export default () => {
  const dispatch = useDispatch()

  const isAuth = useSelector((state) => state.auth.isAuth)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    const usernameTrim = username.trim()
    const passwordTrim = password.trim()
    if (!usernameTrim) {
      setError('유저네임을 적어주세요')
      return
    }
    if (!passwordTrim) {
      setError('비밀번호를 적어주세요')
      return
    }
    try {
      const res = await axios.post(
        'https://thingproxy.freeboard.io/fetch/https://authserver.mojang.com/authenticate',
        {
          username: usernameTrim,
          password: passwordTrim,
          agent: {
            name: 'Minecraft',
            version: 1
          }
        }
      )
      const {
        accessToken,
        clientToken,
        selectedProfile: { name, id }
      } = res.data
      dispatch(actions.SignIn(accessToken, clientToken))
      dispatch(actions.SetUserInfo(name, id))
    } catch (err) {
      setError(err.response.data.errorMessage)
    }
  }

  return isAuth ? (
    <Redirect to='/' />
  ) : (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
      }}>
      <div
        style={{
          height: '300px',
          width: '400px'
        }}
        className='text-white text-center bg-white shadow-lg centerAll flex justify-center items-center bg-opacity-50 rounded-lg'>
        <div className='' style={{ height: 'fit-content' }}>
          <div className='text-3xl text-gray-800 font-bold'>MRS Launcher</div>
          <div className='text-gray-800 mb-4'>
            먼저 Minecraft계정으로 로그인하여 주세요
          </div>
          <div className='mx-12 mb-4'>
            <input
              className='input01 w-full'
              type='text'
              placeholder='이메일 또는 유저이름'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='mx-12'>
            <input
              className='input01 w-full'
              type='password'
              placeholder='비밀번호'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error ? <div className='my-4 text-red-200'>{error}</div> : null}
          <div className='mx-16 mt-4 cursor-pointer'>
            <div onClick={handleLogin}>로그인</div>
          </div>
        </div>
      </div>
    </div>
  )
}
