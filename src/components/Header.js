import React from 'react'
import icons from '../utils/icons'
import Search from './Search'
const {LiaLongArrowAltRightSolid, LiaLongArrowAltLeftSolid} = icons
const Header = () => {
  return (
    <div className='flex justify-between w-full '>
        <div className='flex gap-6 w-full'>
            <div className='flex gap-5 items-center justify-between text-gray-400'>
                <span><LiaLongArrowAltLeftSolid size={30}/> </span>
                <span><LiaLongArrowAltRightSolid size={30}/> </span>
            </div>

            <div className='w-1/2'>
                <Search/>
            </div>
        </div>
        
        <div>
            login
        </div>
    </div>
  )
}

export default Header