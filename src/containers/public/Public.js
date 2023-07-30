import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBarLeft, SideBarRight, Player } from '../../components'


const Public = () => {
  return (
    <div className='w-full min-h-screen flex flex-col bg-main-300'>
         <div className='w-full h-full flex'>
            <div className='w-[240px] min-h-screen flex-none flex-auto '>
              <SideBarLeft/>
            </div>

            <div className='flex-auto'>
              <Outlet/>
            </div>
            
            <div className='w-[330px] hidden 1600:flex flex-none animate-slide-right'>
              <SideBarRight/>
            </div>     
         </div>
         <div className='flex-none h-[90px] bottom-0 w-full right-0 fixed bg-main-400'>
            <Player/>
         </div>
    </div>

  )
}

export default Public