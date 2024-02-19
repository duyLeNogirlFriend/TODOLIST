import React from 'react'
import { useSelector } from 'react-redux'
import { handleNumber } from '../../utils/fn'

const SearchAll = () => {
  const searchData = useSelector((state) => state.music.searchData)
  console.log(searchData)
  return (
    <div className=' px-[60px]'>
      <span className=' font-bold'>Top</span>
      <div className='flex w-[30%] border p-4 rounded'>
        <div className='flex gap-4'>
          <img src={searchData?.top?.thumbnail}
                className='rounded-[100%] w-20 h-20 object-cover '/>
          
          <div className='flex flex-col'>
            <span>{searchData?.top?.objectType === 'artist' ? 'Artist' : ''}</span>
            <span>{searchData?.top?.name}</span>
            <span>{handleNumber(searchData?.artists?.[0]?.totalFollow)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchAll
