import React, { useState } from 'react'
import {memo} from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import * as actions from '../store/actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const {BsThreeDots} = icons

const SongItem = ({data}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickSongItem = () => {
      dispatch(actions.setCurrentSongId(data.encodeId))
      dispatch(actions.checkPlaying(true))
      dispatch(actions.setPlayList(null))
  }
  return (
    <div className='w-[50%] min-[1224px]:w-[30%] flex items-center flex-auto p-[10px] gap-[10px] hover:bg-main-200 cursor-pointer mr-8 rounded-lg relative group'
    onClick={handleClickSongItem}
    >
      <img className='w-16 h-16 object-cover rounded-md' src={data.thumbnail}></img>
      <div className='flex flex-col'>
        <span className='font-semibold text-gray-700'>
          {data.title.length > 30? `${data.title.slice(0,30)}...` : data.title}
        </span>
        <span className='text-gray-500 text-sm'>
          {data.artistsNames}
        </span>
        <span className='text-gray-500 text-sm'>
          {moment(data.releaseDate * 1000).fromNow()}
        </span>
      </div>
      
      <span className='ml-auto opacity-0 group-hover:opacity-100'>
          <BsThreeDots/>
      </span>
      
    </div>
  )
}

export default memo(SongItem)