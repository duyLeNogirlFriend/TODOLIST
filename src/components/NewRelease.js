import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import icons from '../utils/icons'
import { useState } from 'react'
import SongItem from './SongItem'

const NewRelease = () => {
    const {new_release} = useSelector(state => state.app)
    const {MdOutlineNavigateNext} = icons
    const [isActive, setIsActive] = useState(0)
    const [songs, setSongs] = useState([])

    useEffect(() => {
        isActive === 0 ? setSongs(new_release?.items?.all) : isActive === 1 ? setSongs(new_release?.items?.vPop) : setSongs(new_release?.items?.others)
    },[isActive, new_release])
  return (
    <div className='mt-12 px-[60px] flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[18px] font-bold'>{new_release?.title}</h3>
            <span className='flex items-center cursor-pointer hover:text-main-500'>
                <span>View all</span>
                <MdOutlineNavigateNext size={28}/>
            </span>
        </div>
        <div className='flex gap-2'>
            <button 
            type='button'
            onClick={() => setIsActive(0) }
            className={`w-[100px] h-7 rounded-l-full rounded-r-full ${isActive === 0 && 'bg-main-500 text-white' } border border-[#0e8080] hover:opacity-80  text-[14px]`}>    
             ALL
            </button>

            <button 
            type='button'
            onClick={() => setIsActive(1) }
            className={`w-[100px] h-7 rounded-l-full rounded-r-full ${isActive === 1 && 'bg-main-500 text-white' } border border-[#0e8080] hover:opacity-80  text-[14px]`}>    
                VIETNAM
            </button>

            <button 
            type='button'
            onClick={() => setIsActive(2)}
            className={`w-[100px] h-7 rounded-l-full rounded-r-full ${isActive === 2 && 'bg-main-500 text-white' } border border-[#0e8080] hover:opacity-80  text-[14px]`}>         
                NATIONAL
            </button>

            
        </div>

        <div className='flex flex-wrap w-full '>
            {songs?.map(item => (
                <SongItem key={item.encodeId} data={item}/>
            ))}
        </div>
        
    </div>
  )
}

export default NewRelease