import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import * as actions from '../actions/auth'

export default () => {
  const dispatch = useDispatch()

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
      console.log(name, id)
      dispatch(actions.SignIn(accessToken, clientToken))
    } catch (err) {
      setError(err.response.data.errorMessage)
    }
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#111111',
          height: '550px',
          width: '400px'
        }}
        className='text-white text-center'>
        <div className='text-3xl mt-12' style={{ color: '#A1A1A1' }}>
          로그인
        </div>
        <div className='mx-16 mt-12'>
          <input
            className='input01'
            type='text'
            placeholder='이메일 또는 유저이름'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mx-16 mt-4'>
          <input
            className='input01'
            type='password'
            placeholder='비밀번호'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error ? <div className='my-4 text-red-400'>{error}</div> : null}
        <div className='mx-16 mt-4'>
          <div onClick={handleLogin}>로그인</div>
        </div>
      </div>
    </div>
  )
}
