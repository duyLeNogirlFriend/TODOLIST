import React from 'react'
import { useSelector } from 'react-redux'
import SectionItem from '../../components/SectionItem'
import { handleNumber } from '../../utils/fn'
import moment from 'moment'
const SearchAll = () => {
  const searchData = useSelector((state) => state.music.searchData)
  console.log(searchData)
  return (
    <div className='px-[60px] overflow-auto pb-[400px]'>  
      <div className='my-8'>
        <span className='font-bold text-lg'>Top</span>
        <div className='flex w-[30%] p-4 rounded mt-6'>
          <div className='flex gap-4'>
            <img src={searchData?.top?.thumbnail}
                  className='rounded-[100%] w-20 h-20 object-cover '/>
            
            <div className='flex flex-col'>
              <span>{searchData?.top?.objectType === 'artist' ? 'Artist' : ''}</span>
              <span>{searchData?.top?.name}</span>
              <span>{handleNumber(searchData?.artists?.[0]?.totalFollow)} followers</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span className='font-bold text-lg'>Songs</span>
        <div className='w-full flex flex-wrap gap-8'>
          {searchData?.songs?.map((item) => (
            <div className='flex border w-[40%] p-2 gap-4 items-center' key={item.encodeId}> 
              <img src={item.thumbnail} className='rounded w-12 h-12 object-cover'/>
              <div className='flex flex-col'>
                <span>{item.title}</span>
                <span>{item.artistsNames}</span>
              </div>
              <span className='flex-end ml-auto'>{moment.utc(item.duration * 1000).format('mm:ss')}</span>
            </div>
          ))}

        </div>
      </div>

      <div className='mt-12'>
        <span className='font-bold text-lg'>Playlist/Album</span>
        <div className='flex w-full gap-4'>
          {searchData?.playlists?.slice(0,5).map((item) => (
            <SectionItem data={item}/>
          ))}
        </div>
      </div>

      <div className='mt-12'>
        <span className='font-bold text-lg'>Artists/OA</span>
        <div className='flex w-full'>
          {searchData?.artists?.slice(0,5).map((item) => (
            <div className='w-[20%] flex flex-col justify-centet items-center' key={item.encodeId}>
              <img className='w-[40%y] h-[40%] rounded-[100%] object-cover' src={item.thumbnail} />
              <span>{item.name}</span>
              <span>{handleNumber(item.totalFollow)} followers</span>
              <button>About</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchAll
