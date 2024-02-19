import React, {memo} from 'react'
import icons from '../utils/icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'
import { act } from 'react-dom/test-utils';

const {CiMusicNote1} = icons
const ListItem = ({songData}) => {
  const dispatch = useDispatch()
  return (
    <div className='flex justify-around gap-16 items-center p-[10px] border-b border-[rgba(0,0,0,0.05)] hover:bg-[#dde4e4] cursor-pointer'
        onClick={() => {
            dispatch(actions.setCurrentSongId(songData?.encodeId))
            dispatch(actions.checkPlaying(true))
            dispatch(actions.checkIsAtAlbum(true))
            dispatch(actions.setRecentSongs({title : songData.title, thumbnail : songData.thumbnail, artists : songData.artistsNames, encodeId : songData.encodeId}))
            }}>
        <div className='flex items-center gap-3 flex-1'> 
            <span>
                <CiMusicNote1/>
            </span>
            <img src={songData?.thumbnail} className='w-10 h-10 object-cover rounded-md'/>
            <span className='flex flex-col'>
                <span className='text-sm font-semibold whitespace-nowrap text-[#333]'>{songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title }</span>
                <span>{songData?.artistsNames?.length > 30 ? `${songData?.artistsNames?.slice(0, 30)}...` : songData?.artistsNames }</span>
            </span>
        </div>

        <div className='flex-1 w-[50%] flex items-center justify-center font-semibold '>
            {songData?.album?.title}
        </div>

        <div className='flex-1 flex justify-end'>
            {moment.utc(songData?.duration * 1000).format ('mm:ss')}
        </div>
    </div>
  )
}

export default memo(ListItem)