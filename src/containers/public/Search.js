import React from 'react'
import { Outlet } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
const Search = () => {
  return (
    <div>
    <div className='w-full gap-4 flex px-[60px]'>
      <div className='border-r w-[20%] text-xl font-bold'>Search Result</div>
      <div className='flex justify-start flex-3 gap-6 w-[60%]'>
        <span>ALL</span>
        <span>SONGS</span>
        <span>PLAYLIST/ALBUM</span>
        <span>ARTISTS</span>
        <span>MV</span>
      </div>
    </div>
    <Scrollbars style={{ width: '100%', height: 900 }} autoHide>
              <Outlet />
    </Scrollbars>
    </div>
  )
}

export default Search
