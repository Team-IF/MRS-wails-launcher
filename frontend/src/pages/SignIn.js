import React, { useState } from 'react'

export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
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
