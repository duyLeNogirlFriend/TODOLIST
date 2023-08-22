import React from 'react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import icons from '../utils/icons'
import SectionItem from './SectionItem'

const {MdOutlineNavigateNext} = icons
const Section = () => {
  const chillList = useSelector(state => state.app)
  console.log(chillList)
  return (
    <div className='mt-12 px-[60px] flex flex-col gap-5'>
      <div className='flex items-center justify-between'>
        <h3 className='text-[18px] font-bold'>{chillList.chill.title}</h3>
        <span className='flex items-center cursor-pointer hover:text-main-500'>
          <span>View all</span>
          <MdOutlineNavigateNext size={28}/>
        </span>
      </div>

      <div className='flex gap-3'> 
        {chillList.chill.items?.map(item => (
           <SectionItem key={item.encodeId} data={item}/>
        ))}
       
      </div>
    </div>
  )
}

export default memo(Section)