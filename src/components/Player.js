import React, { useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import moment from 'moment'
import * as apis from '../apis'
import icons from '../utils/icons'
import * as actions from '../store/actions'
import LoadingSong from './LoadingSong'

const {AiOutlineHeart,
    AiFillHeart, 
    BsThreeDots, 
    BsRepeat,
    MdSkipNext,
    MdSkipPrevious,
    BsPlayCircle,
    LiaRandomSolid, BsPauseCircle, BsMusicNoteList, FiVolume1, FiVolume2, FiVolumeX} = icons

const Player = ({setIsShowRightSideBar}) => {
    const {currentSongId, isPlaying, atAlbum, songs } = useSelector(state => state.music)
    const [songInfo, setSongInfo] = useState(null)

    // const [audio, setAudio] = useState(new Audio)
    const [audio, setAudio] = useState(new Audio())
    const [duration, setDuration] = useState(0)
    const [isRandom, setIsRandom] = useState(false)
    const [isRepeated, setIsRepeated] = useState(false)
    const [isLoadingSource, setIsLoadingSource] = useState(true)
    const [isMuted, setIsMuted] = useState(false)
    const[volume, setVolume] = useState(70)
    const thubRef = useRef()
    const trackRef = useRef()
    const intervalId = useRef(null)
    const dispatch = useDispatch()
    

    //call api
    useEffect(() => {
        const fetchDetailSong = async () => {
            setIsLoadingSource(false)
            const [res1, res2] = await Promise.all([
                apis.getDetailInfoSong(currentSongId),
                apis.getSong(currentSongId)
            ])
            if(res1.data.err === 0 && res2.data.err !== -1110){
                setSongInfo(res1.data.data)
                
            }
            if(res2.data.err === 0){
                audio.pause()     
                setAudio( new Audio(res2.data.data[128]))             
            }
            else{
                alert('Can not play this song, please choose another one')             
            } 
            setIsLoadingSource(true)           
        }
        fetchDetailSong();
    }, [currentSongId])
 

    useEffect(() => {
        //clear interval cua bai truoc khi doi sang bai moi
        intervalId && clearInterval(intervalId.current);
        // audio.pause()
        // audio.load();
        if (isPlaying) {
            audio.play()           
            intervalId.current = setInterval(() => {
                if (audio.paused) {
                    return;
                  }
                  let percent = Math.round((audio.currentTime / songInfo?.duration) * 100);
                setDuration(Math.round(audio.currentTime))
                thubRef.current.style.cssText = `right: ${100 - percent}%`
            }, 200)
        }else{
            audio.pause()
        }
            return () => {
                clearInterval(intervalId.current)
            }
    }, [audio, isPlaying]) 

    useEffect( () => {
        const handleEnded = () => {       
            if(isRepeated){
                handleRepeatClick()
            } 
            else if (isRandom) {
                handleRandomClick()
            }
            else {
                handleNextClick()     
            }
        }
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('ended', handleEnded)
        }
    }, [audio, isRepeated, isRandom])

    useEffect(() => {
        audio.volume = volume /100
    }, [volume])


    const handleTooglePlay = () => {
        if(isPlaying){
            audio.pause()
            dispatch(actions.checkPlaying(false))
        }else{
            audio.play()
            dispatch(actions.checkPlaying(true))
        }
    }

    const handleClickProgressBar = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect()
        const percent = Math.round((e.clientX - trackRect.left) * 100 / trackRect.width)
        thubRef.current.style.cssText = `right: ${100 - percent}%`
        audio.currentTime = percent * songInfo.duration / 100
        setDuration(Math.round(audio.currentTime))
    }

    const handlePrevClick = () => {
        let currentSongIndex
        if (songs) {
            songs?.forEach((item, index) => {
                if (item.encodeId === currentSongId)
                    currentSongIndex = index
                })    
                dispatch(actions.setCurrentSongId(songs[currentSongIndex - 1].encodeId))    
        } 
    }

    const handleNextClick = () => {
        let currentSongIndex
        if (songs) {
            songs?.forEach((item, index) => {
                if (item.encodeId === currentSongId)
                    currentSongIndex = index
                })    
                dispatch(actions.setCurrentSongId(songs[currentSongIndex + 1].encodeId))    
        } 
    };

    //random click
    const handleRandomClick = () => {    
            const randomIndex = Math.round(Math.random() * songs?.length) - 1
            dispatch(actions.setCurrentSongId(songs[randomIndex].encodeId))
            actions.checkPlaying(true)  
    }
    

    //repeat click 
    const handleRepeatClick = () => {
        audio.play()
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

        <div className='w-[40%] flex-auto flex items-center justify-center flex-col '>
            <div className='flex justify-center gap-8 mb-3 items-center'>
                <span title='Random' className={`cursor-pointer ${isRandom && 'text-main-500'} hover:text-main-500`}
                    onClick={() => setIsRandom(prev => !prev)}>
                    <LiaRandomSolid size={30}/>
                </span>
                <span title='Previous'  className={`${!songs? 'text-gray-500' : 'cursor-pointer hover:text-main-500' }`}
                    onClick={handlePrevClick}>
                    <MdSkipPrevious size={30}/>
                </span>

                <span title='Play' className='cursor-pointer hover:text-main-500' 
                    onClick={handleTooglePlay}>

                    {!isLoadingSource? <LoadingSong/> : isPlaying? <BsPauseCircle size={30}/> : <BsPlayCircle size={30} />}
                
                </span>

                <span title='Next' className={`${!songs? 'text-gray-500' : 'cursor-pointer hover:text-main-500' }`}
                    onClick={handleNextClick}>
                    <MdSkipNext size={30}/>
                </span>
                <span title='Loop' className={`cursor-pointer ${isRepeated && 'text-main-500'} hover:text-main-500`}
                    onClick={() => setIsRepeated(prev => !prev)}>
                    <BsRepeat size={30}/>
                </span>
            </div>

            <div className='w-full flex items-center'>
                
                <span className='text-gray-500 font-semibold text-sm'>  {moment.utc(duration*1000).format ('mm:ss')}</span>

               <div ref={trackRef} className='w-4/5 h-[3px] hover:h-[7px] cursor-pointer bg-[rgba(0,0,0,0.1)] m-auto relative rounded-l-full rounded-r-full'
                    onClick={handleClickProgressBar}>
                    <div ref={thubRef} className='absolute top-0 left-0 bottom-0 bg-[#0e8080] rounded-l-full rounded-r-full '></div>
               </div>

               <span className='text-gray-500 font-semibold text-sm'>  {moment.utc(songInfo?.duration * 1000).format ('mm:ss')}</span>

            </div>
        </div>

        <div className='w-[30%] flex-auto flex items-center justify-center'>
            <span onClick={() => {setVolume(prev => +prev === 0 ? 70 : 0)}}>
                {volume > 0 && volume <= 50? <FiVolume1/> : volume > 50? <FiVolume2/> :  <FiVolumeX/>   }
            </span>

            <input type='range' step={1} min={0} max={100} value={volume} onChange={(e) => {setVolume(e.target.value)}}
            />        
                <span className='border-2 border-[#0e8080] p-2 rounded-md hover:bg-main-500 hover:text-white cursor-pointer '
                        onClick={() => setIsShowRightSideBar(prev => !prev)}
                >
                    <BsMusicNoteList />
                </span>       
        </div>
    </div>
  )
}

export default Player 