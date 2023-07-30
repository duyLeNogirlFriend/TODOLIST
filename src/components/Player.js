import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import * as apis from '../apis'
import icons from '../utils/icons'


const {AiOutlineHeart,
    AiFillHeart, 
    BsThreeDots, 
    BsRepeat,
    MdSkipNext,
    MdSkipPrevious,
    BsPlayCircle,
    LiaRandomSolid, BsPauseCircle} = icons

const Player = () => {
    const audioEl = new Audio()
    const {currentSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)
    const [source, setSource] = useState(null)
    console.log(isPlaying)

    useEffect(() => {
        const fetchDetailSong = async () => {
            const [res1, res2] = await Promise.all([
                apis.getDetailInfoSong(currentSongId),
                apis.getSong(currentSongId)
            ])
            if(res1.data.err === 0){
                setSongInfo(res1.data.data)
            }
            if(res2.data.err === 0) {
                setSource(res2.data.data['128'])
            }
        }

        fetchDetailSong();
    }, [currentSongId])

    useEffect(() => {

    }, [currentSongId])

    const handleTooglePlay = () => {
        // setIsPlaying(prev => !prev)
    }


    return (
    <div className='px-5 h-full flex'>
        <div className='w-[30%] flex-auto flex items-center gap-4'>
            <img  src={songInfo?.thumbnail} alt='thumbnail' className='w-16 h-16 object-cover rounded-md '/>
            <div className='flex flex-col'>
                <span className='font-semibold text-gray-700'>{songInfo?.title}</span>
                <span className=' text-gray-500 text-sm'>{songInfo?.artistsNames}</span>
            </div>
            <div className='flex gap-4 pl-2'>
                <span>
                    <AiOutlineHeart size={18}/>
                </span>
                <span>
                    <BsThreeDots size={18}/>
                </span>
            </div>
        </div>

        <div className='w-[40%] flex-auto flex items-center justify-center flex-col border border-red-500'>
            <div className='flex justify-center gap-8'>
                <span title='Random' className='cursor-pointer text-gray-700 hover:text-main-500'>
                    <LiaRandomSolid size={30}/>
                </span>
                <span title='Previous' className='cursor-pointer text-gray-700 hover:text-main-500'>
                    <MdSkipPrevious size={30}/>
                </span>
                <span title='Play' className='cursor-pointer text-gray-700 hover:text-main-500' onClick={handleTooglePlay}>
                    {isPlaying? <BsPauseCircle size={30}/> :  <BsPlayCircle size={30}/> }
                
                </span>
                <span title='Next' className='cursor-pointer text-gray-700 hover:text-main-500'>
                    <MdSkipNext size={30}/>
                </span>
                <span title='Loop' className='cursor-pointer text-gray-700 hover:text-main-500'>
                    <BsRepeat size={30}/>
                </span>
            </div>
            <div>
               -------------- progress bar-----------
            </div>
        </div>

        <div className='w-[30%] flex-auto border border-red-500'>
            Volume
        </div>
    </div>
  )
}

export default Player