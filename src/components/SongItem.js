import React, { useState } from 'react'
import {memo} from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoadingAudio from './LoadingAudio'


const {BsThreeDots, BsPlayCircle} = icons

const SongItem = ({thumbnail, title, artists, releaseDate, encodeId, order, percent, style , sm}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentSong = useSelector((state) => state.music)
  const handleClickSongItem = () => {
    dispatch(actions.setCurrentSongId(encodeId))
    dispatch(actions.checkPlaying(true))
    dispatch(actions.setPlayList(null))
    dispatch(actions.setRecentSongs({ title , thumbnail, artists, encodeId}))
    // if(currentSongId === )
  }
  return (
    <div className={`mt-2 w-full flex items-center flex-auto p-[10px] gap-[10px] cursor-pointer rounded-lg relative group 
                    ${order || sm ? 'hover:bg-main-500 bg-[rgba(215,219,216,0.5)]' : 'hover:bg-main-200'}  
                    ${style || 'text-black'}`}
          onClick={handleClickSongItem}
    >
      {order && <span className={`${order <= 3 ? 'text-white text-[40px]' : ' ' } `}>{order}</span>}
      <div className='relative group'>
        <img className= {` ${!sm? 'w-16 h-16' : 'w-10 h-10'} object-cover rounded-md `} src={thumbnail}></img>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center
                         '>
          <div className='opacity-0 group-hover:opacity-100 duration-300 '>
            <BsPlayCircle style={{color: 'white'}} size={30}/>
          </div>
          {/* <div className='w-4'>
            <LoadingAudio/>
          </div> */}
        </div>  
      </div>
      <div className={`flex flex-col `}>
        <span className='font-semibold'>
          {title?.length > 30 ? `${title.slice(0,30)}...` : title}
        </span>
        <span className={`text-sm `}>
          {artists}
        </span>
        { releaseDate && 
          <span className= 'text-gray-700 text-sm'>
            {moment(releaseDate * 1000).fromNow()}
          </span>
        }
      </div>
      {percent && <span className='ml-auto font-bold'>{percent}%</span>}

      {releaseDate &&
        <span className='ml-auto opacity-0 group-hover:opacity-100'>
            <BsThreeDots/>
        </span>
      }

    </div>
  )
}
export default memo(SongItem)