import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarLeft, SideBarRight, Player, Header, LoadingPage } from '../../components'
import Scrollbars from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
const Public = () => {
  const [isShowRightSideBar, setIsShowRightSideBar] = useState(true)
  const {isLoading} = useSelector(state => state.app)
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>
      <div className='w-full h-full flex'>
        <div className='w-[240px] min-h-screen flex-none flex-auto '>
          <SideBarLeft />
        </div>

        <div className='relative flex-auto'>

          <div className='h-[70px] px-[60px] flex items-center mb-5'>
            {isLoading &&  <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-main-300 z-10'>
                              <LoadingPage/>
                          </div> }
          
            <Header />
          </div>

          <div className='flex-auto w-full'>
            <Scrollbars style={{ width: '100%', height: 900 }} autoHide>
              <Outlet />
              <div className='h-[1000px]'></div>
            </Scrollbars>
          </div>

        </div>

        {isShowRightSideBar &&
          <div className='w-[330px] flex flex-none animate-slide-right'>
            <SideBarRight />
          </div>
        }

      </div>

      <div className='flex-none h-[90px] bottom-0 w-full right-0 fixed bg-main-400 z-20'>
        <Player setIsShowRightSideBar={setIsShowRightSideBar} />
      </div>
    </div>

  )
}

export default Public