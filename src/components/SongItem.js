import React, { useState } from 'react'
import {memo} from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'


const {BsThreeDots} = icons

const SongItem = ({thumbnail, title, artists, releaseDate, encodeId, order, percent }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickSongItem = () => {
      dispatch(actions.setCurrentSongId(encodeId))
      dispatch(actions.checkPlaying(true))
      dispatch(actions.setPlayList(null))
  }
  return (
    <div className={`  mt-2 w-full flex items-center flex-auto p-[10px] gap-[10px] ${order ? 'hover:bg-main-500  bg-[rgba(215,219,216,0.5)]' : 'hover:bg-main-200'}  cursor-pointer rounded-lg relative group ${order?'text-white' : 'text-black'}`}
    onClick={handleClickSongItem}
    >
      {order && <span className={`${order <= 3 ? 'text-white text-[40px]' : ' ' } `}>{order}</span>}
      <img className='w-16 h-16 object-cover rounded-md' src={thumbnail}></img>
      <div className={`flex flex-col ${order? 'text-white' : 'text-gray-700'} `}>
        <span className='font-semibold'>
          {title?.length > 30? `${title.slice(0,30)}...` : title}
        </span>
        <span className={`text-sm ${order ? 'text-white' : 'text-gray-500'}`}>
          {artists}
        </span>
        { releaseDate && 
          <span className= 'text-gray-700 text-sm'>
            {moment(releaseDate * 1000).fromNow()}
          </span>
        }
      </div>
      {percent && <span className='ml-auto'>{percent}%</span>}

      {releaseDate &&
        <span className='ml-auto opacity-0 group-hover:opacity-100'>
            <BsThreeDots/>
        </span>
      }

    </div>
  )
}
export default memo(SongItem)