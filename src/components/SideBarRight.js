import React, { useState, useEffect } from 'react'
import icons from '../utils/icons'
import { useSelector } from 'react-redux'
import SongItem from './SongItem'
import { getDetailPlaylist } from '../apis'
import { set } from 'lodash'
import Scrollbars from 'react-custom-scrollbars-2'
import LoadingSong from './LoadingSong'

const SideBarRight = () => {
  const {IoTrashBinOutline} = icons
  const [recent, setRecent] = useState(false)
  const {currentSongData,  currentAlbumId, recentSongs} = useSelector((state) => state.music)
  const [playList, setPlayList] = useState()
  const [isLoadingList, setIsLoadingList] = useState(false)
  useEffect(()=> {
    const fetchDataPlaylist = async () => {
      const response = await getDetailPlaylist(currentAlbumId)
      if(response.data?.err === 0) {
        setPlayList(response.data.data?.song.items)
        setIsLoadingList(true)
      }
    }
    if(currentAlbumId) fetchDataPlaylist()
  }, [currentAlbumId])
  return (
    <div className='w-full flex flex-col text-sm border h-full items-center px-2 fixed'>
      <div className='h-[70px] w-full flex pt-[14px] justify-around items-center '>
        <div className='rounded-full flex p-[2px] bg-main-400 items-center '>
          <div className={`p-[2px] px-4 cursor-pointer text-main-500  duration-200 ${!recent ? ' rounded-full bg-main-500 text-white' : '' }`}
                onClick={() => setRecent(false)}
          >
              My Playlist
          </div>
          <div className={`p-[2px] px-4 cursor-pointer text-main-500  duration-200 ${recent ? ' rounded-full bg-main-500 text-white' : '' }`}
                 onClick={() => setRecent(true)}
          >
              Recent Songs
          </div>
        </div>

        <span><IoTrashBinOutline size={18}/></span>
      </div>

      <div className='w-full'>
        <SongItem 
          thumbnail={currentSongData?.thumbnail}
          title={currentSongData?.title}
          artists={currentSongData?.artistsNames}
          sm
          style='bg-main-500 text-white '
        />
        <div className='flex flex-col mt-4'>
          <span className='font-bold'>Next</span>
          <div className='flex gap-2'>
            <span>From playlist: </span>
            <span className='text-main-500 cursor-pointer'>{currentSongData?.album?.title.length > 30 ? `${currentSongData?.album?.title.slice(0,30)}...` : currentSongData?.album?.title } </span>
          </div>
        </div>
      </div>

      {playList && Array.isArray(playList) && !recent? (
        <div className='mt-4 w-full flex-auto overflow-y-auto h-full mb-10 '>
          <Scrollbars style={{ width: '100%', height: '90%' }} autoHide>
            {playList?.map((item) => (
              <SongItem
                thumbnail={item?.thumbnail}
                title={item?.title}
                artists={item?.artistsNames}
                encodeId={item.encodeId}
                sm
                style='hover:text-white duration-200 ease-in-out'
              />
            ))}
          </Scrollbars>
        </div>) : !recent &&  (
        <div className='mt-16'>
          <LoadingSong />
        </div>
      )}

      {recent && (
        <div className='mt-4 w-full flex-auto overflow-y-auto h-full mb-10 '>
          <Scrollbars style={{ width: '100%', height: '90%' }} autoHide>
          {recentSongs?.map((item) => (
              <SongItem
                thumbnail={item?.thumbnail}
                title={item?.title}
                artists={item?.artists}
                encodeId={item.encodeId}
                sm
                style='hover:text-white duration-200 ease-in-out'
              />
              ))}
            </Scrollbars>
        </div>
      )}
    </div>
  )
}

export default SideBarRight