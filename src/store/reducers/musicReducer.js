import { act } from "react-dom/test-utils"
import actionType from "../actions/actionType"

const initState = {
    currentSongId: null,
    currentSongData: null,
    isPlaying: false,
    atAlbum: false,
    songs: null,
    currentAlbumId: null,
    recentSongs: []
}
const musicReducer = (state = initState, action ) => { 
    switch(action.type) {
        case actionType.SET_CURRENT_SONG_ID:
            return{
                ...state,
                currentSongId: action.songId || null
            }         
        case actionType.CHECK_PLAYING:
            return{
                ...state,
                isPlaying: action.flag
            }
        case actionType.CHECK_AT_ALBUM:
            return {
                ...state,
                atAlbum: action.flag
            }
        case actionType.GET_PLAYLIST: 
            return{ 
                ...state,
                songs: action.songs || null
            }     
        case actionType.SET_CURRENT_SONG_DATA:
            return {
                ...state,
                currentSongData: action.data || null
            }     
        case actionType.SET_CURRENT_ALBUM_ID:
            return {
                ...state,
                currentAlbumId: action.id || null
            }    
        case actionType.SET_RECENT:
            const updatedRecentSongs = [
                action.songData,
                ...state.recentSongs.filter(song => song.encodeId !== action.songData.encodeId)
            ];
            return {
                ...state,
                recentSongs: updatedRecentSongs
            };   
        default :
            return state 
    }
}

export default musicReducer;