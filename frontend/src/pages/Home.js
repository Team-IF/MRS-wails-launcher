import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions/auth'

export default () => {
  const dispatch = useDispatch()
  const authInfo = useSelector((state) => state.auth)

  const handleSignOut = () => dispatch(actions.SignOut())

  return (
    <div
      className='flex text-white'
      style={{ width: '100vw', height: '100vh' }}>
      <div
        style={{ backgroundColor: '#1E1E1E', width: '230px' }}
        className='pt-4 justify-between flex flex-col'>
        <div>
          <div className='font-black tracking-wide text-xl text-center'>
            <div>MRS Launcher</div>
          </div>
          <div className='w-full flex flex-col mt-8'>
            <div className='h-12 flex flex-col items-center justify-center mb-3'>
              <div className='font-bold'>서버 리스트</div>
              <div>클릭하여 서버를 변경</div>
            </div>
            <div>
              <div className='pl-4 mb-4 py-2 w-full cursor-pointer'>
                <div className='font-bold'>서버이름</div>
                <div className='text-sm'>간단설명</div>
              </div>
              <div
                className='pl-4 mb-4  py-2 w-full cursor-pointer bg-gray-800'
                style={{ backgroundColor: '#353535' }}>
                <div className='font-bold'>선택된 서버</div>
                <div className='text-sm'>선택됬을때 디자인</div>
              </div>
            </div>
          </div>
          <div className='w-full mt-4'>
            <div className='text-center font-bold'>모드팩 정보</div>
            <div className='ml-2 mt-3' id='modpackList'>
              <div className='mb-2'>Lorem ipsum</div>
              <div className='mb-2'>Lorem ipsum</div>
            </div>
          </div>
        </div>
        <div
          id='signOutBtn'
          className='mt-4 w-full h-12 flex items-center justify-center'
          onClick={handleSignOut}>
          <div>로그아웃</div>
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <div
          style={{ backgroundColor: '#282828' }}
          className='h-16 w-full flex justify-between px-8'>
          <div></div>
          <div className='my-auto text-white font-bold flex'>
            <a className='mr-2' href='https://mysticrs.tk/'>
              홈페이지
            </a>
            <div>/</div>
            <a className='ml-2' href='https://discord.gg/C9RJn4g'>
              디스코드
            </a>
          </div>
        </div>
        <div className='h-full'></div>
        <div
          className='bg-gray-800 h-12 w-full flex justify-between px-8 text-white'
          style={{ backgroundColor: '#262626' }}>
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
