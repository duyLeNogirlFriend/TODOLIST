import React from 'react'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import icons from '../utils/icons'

const {BsPlayCircle, BsThreeDots, AiOutlineHeart } = icons
const SectionItem = ({data}) => {
  const navigate = useNavigate()

  return (
    <div className='h-auto w-full ' 
    onClick={() => {
      navigate(data.link?.split('.')[0])
    }}
   >
        <div className='relative group overflow-hidden rounded-lg '>
          <div className='absolute top-0 bottom-0 left-0 right-0 bg-overlay-30 opacity-0 group-hover:opacity-100 z-10'>
          </div>
          <div className='flex gap-7 items-center justify-center z-20 absolute top-0 bottom-0 left-0 right-0 text-white-500 opacity-0 group-hover:opacity-100 '>
            <span>
              <AiOutlineHeart size={25} style={{ color: 'white' }}/>
            </span>
            <span>
              <BsPlayCircle size={25} style={{ color: 'white' }}/>
            </span>
            <span>
              <BsThreeDots size={25} style={{ color: 'white' }}/>
            </span>
          </div>
          <img src={data.thumbnailM} className='transform scale-100 group-hover:scale-110 transition-transform duration-[0.7s]'/>
        </div>
        <h2 className='text-[18px] pt-3 hover:text-main-500'> {data.title}</h2>
        <p className='text-gray-500 text-[15px] font-[20px] pt-3'>{ data.sortDescription? `${data.sortDescription?.slice(0,60)}...` : ''}</p>
    </div>
  )
}

export default memo(SectionItem)