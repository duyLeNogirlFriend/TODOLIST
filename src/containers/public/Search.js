import React from 'react'
import { Outlet } from 'react-router-dom'
const Search = () => {
  return (
    <div className='w-full gap-4 flex px-[60px]'>
      <div className='border-r w-[20%] text-xl font-bold'>Search Result</div>
      <div className='flex justify-start flex-3 gap-6 w-[60%]'>
        <span>ALL</span>
        <span>SONGS</span>
        <span>PLAYLIST/ALBUM</span>
        <span>ARTISTS</span>
        <span>MV</span>

      </div>
      <Outlet/>
    </div>
  )
}

export default Search
