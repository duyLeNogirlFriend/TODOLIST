import React, { useEffect, useState } from 'react'
import icons from '../utils/icons'
import { search } from '../apis'
import { useDispatch } from 'react-redux'
import { createSearchParams, useNavigate } from 'react-router-dom'
import * as actions from '../store/actions'
import path from '../utils/paths'
import { create } from 'lodash'



const {GoSearch} = icons
const Search = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    if(e.keyCode === 13) {
      dispatch(actions.search(keyword))
      navigate({
        pathname: `${path.SEARCH}/${path.ALL}`,
        search: createSearchParams({
          q: keyword
        }).toString()

      })
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