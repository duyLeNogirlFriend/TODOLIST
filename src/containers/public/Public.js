import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarLeft, SideBarRight, Player, Header } from '../../components'
import Scrollbars from 'react-custom-scrollbars-2'

const Public = () => {
  const [isShowRightSideBar, setIsShowRightSideBar] = useState(true)

  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>
         <div className='w-full h-full flex'>
            <div className='w-[240px] min-h-screen flex-none flex-auto '>
              <SideBarLeft/>
            </div>

            <div className='flex-auto'>
              <div className='h-[70px] px-[60px] flex items-center mb-5'>
                <Header />        
              </div>
              <div className='flex-auto w-full'>
                <Scrollbars style={{width: '100%', height: 900}} autoHide>
                    <Outlet/> 
                <div className='h-[1000px]'></div>
                </Scrollbars>
              </div>
                       
            </div>
            
            {isShowRightSideBar && 
                  <div className='w-[330px] flex flex-none animate-slide-right'>
                      <SideBarRight/>
                  </div>
            }
                
             
         </div>

         <div className='flex-none h-[90px] bottom-0 w-full right-0 fixed bg-main-400'>
            <Player setIsShowRightSideBar = {setIsShowRightSideBar}/>
         </div>
    </div>

  )
}

export default Public