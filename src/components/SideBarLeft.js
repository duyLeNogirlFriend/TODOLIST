import React from 'react'
import logo from '../assets/logo.png'
import { sidebarMenu } from '../utils/menu'
import { NavLink, useNavigate } from 'react-router-dom'
import path from '../utils/paths'


const activeStyle = 'py-2 px-[15px] text-[#0f7070] text-[15px] font-bold flex gap-[12px] items-center '
const notActiveStyle = 'hover:text-[#0f7070] py-2 px-[15px] text-[#32323d] text-[15px] font-bold flex gap-[12px] items-center '
const SideBarLeft = () => {

  const navigate = useNavigate(0)
  return (
    <div className='flex h-full flex-col bg-main-200'>
        <div onClick={() => navigate(path.HOME)} className='w-full h-[70px] py-[15px] px-[20px] flex justify-start items-center cursor-pointer'>
            <img src={logo} alt='logo-mp3' className='w-[120px] h-[40px] '/>
        </div>
        <div className='flex flex-col px-[15px]'>          
            {sidebarMenu.map((item, index) => (
              <NavLink key={index} to={item.path} 
                      className={({isActive}) => isActive? activeStyle : notActiveStyle}

              >
                <i className='font-light text-lg'>{item.icon}</i>
                <span> {item.text} </span>
              </NavLink>
            ))}
        </div>
    </div>
  )
}

export default SideBarLeft