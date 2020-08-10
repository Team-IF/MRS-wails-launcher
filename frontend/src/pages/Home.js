import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default () => {
  const dispatch = useDispatch()
  const authInfo = useSelector((state) => state.auth)

  return (
    <div className='flex' style={{ width: '100vw', height: '100vh' }}>
      <div
        className='bg-blue-300 pt-4 justify-between flex flex-col'
        style={{ width: '230px' }}>
        <div className='text-center'>
          <div className=''>
            <div>{authInfo.userName}</div>
          </div>
          <div>
            <div>로그아웃</div>
          </div>
        </div>
        <div className='bg-gray-300 w-full h-48 flex flex-col'>
          <div className='h-12 flex items-center justify-center'>
            <div>현제 선택된 서버</div>
          </div>
          <div className='h-full px-6 py-6 bg-gray-400'>
            {' '}
            <div className='w-full h-full bg-gray-500'></div>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div className='bg-gray-700 h-16 w-full flex justify-between px-8'>
          <div></div>
          <div className='my-auto text-white font-bold'>MRS Launcher</div>
        </div>
        <div className='h-full'></div>
        <div className='bg-gray-800 h-16 w-full flex justify-between px-8 text-white'>
          <div className='my-auto'>LEFT</div>
          <div
            style={{
              position: 'relative',
              top: '-2rem',
              backgroundColor: '#bedbe9'
            }}
            className='w-48 h-18 flex items-center justify-center'>
            <div className=''>Start Game</div>
          </div>
          <div className='my-auto'>RIGHT</div>
        </div>
      </div>
    </div>
  )
}
