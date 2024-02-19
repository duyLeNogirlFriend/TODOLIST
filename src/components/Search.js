import React, { useEffect, useState } from 'react'
import icons from '../utils/icons'
import { search } from '../apis'

const {GoSearch} = icons


const Search = () => {
  const [keyword, setKeyword] = useState('')


  const handleSearch = async (e) => {
    if(e.keyCode === 13) {
      const res = await search(keyword)
      console.log(res)
    }
  }
  return (
    <div className='flex items-center'>
        <input type='text' className='outline-none bg-[#dde4e4] px-4 py-2 rounded-tl-[20px] rounded-bl-[20px] w-full'
              placeholder='Search songs, authors, music lyric... '
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyUp={handleSearch}>
        </input>
        <span className='px-4 py-2 bg-[#dde4e4] text-[25px] rounded-tr-[20px] rounded-br-[20px] cursor-pointer text-gray-400 
                        hover:text-gray-500'>
            <GoSearch/>
        </span>
    </div>
  )
}

export default Search