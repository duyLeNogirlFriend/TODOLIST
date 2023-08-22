import React from 'react'
import ListItem from './ListItem';
import icons from '../utils/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

const {TbArrowsSort, BsDot} = icons

const Lists = ({totalDuration}) => {
  const {songs} = useSelector(state => state.music)
  return (
    <div className='flex flex-col w-full text-xs px-[10px] text-gray-600'>
        <div className='flex items-center justify-between font-semibold px-[10px] mt-4 border-b border-[rgba(0,0,0,0.05)] py-3'>
            <span className='flex items-center gap-3'>
              <span className='border border-gray-500 rounded-[5px] p-[2px]'>
                <TbArrowsSort size={12}/>
              </span>
              SONGS
            </span>

            <span>ALBUM</span>
            <span>TIME</span>
        </div>
        <div className='flex flex-col'>
            {songs?.map(item => (
              <ListItem key={item.encodeId} songData={item}/>
            ))}
        </div>
        <span className='flex text-sm items-center mt-4'>
          <span>{`${songs?.length} songs`}</span>
          <span className='items-center'><BsDot size={20}/></span>
          <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
        </span>
    </div>
  )
}

export default Lists;