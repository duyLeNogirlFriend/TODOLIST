import actionType from "./actionType";
import * as apis from '../../apis'
import { act } from "react-dom/test-utils";


export const setCurrentSongId = (songId) => ({
    type: actionType.SET_CURRENT_SONG_ID,
    songId
})

export const checkPlaying = (flag) => ({
    type: actionType.CHECK_PLAYING,
    flag
})

export const checkIsAtAlbum = (flag) => ({
    type: actionType.CHECK_AT_ALBUM,
    flag
})

export const setPlayList = (songs) => ({
    type: actionType.GET_PLAYLIST,
    songs
})

export const loading = (flag) => ({
    type: actionType.LOADING,
    flag
})

export const setCurrentSongData = (data) => ({
    type: actionType.SET_CURRENT_SONG_DATA,
    data
})

export const setCurrentAlbumId = (id) => ({
    type: actionType.SET_CURRENT_ALBUM_ID,
    id
})

export const setRecentSongs = (songData) => ({
    type: actionType.SET_RECENT,
    songData
})

// thunk for api
export const search = (keyword) => async (dispatch) => {
    try{
        const res = await apis.search(keyword)
        if(res.data.err === 0) {
            dispatch({
                type: actionType.SEARCH,
                data: res.data.data
            })
        } else {
            dispatch({
                type: actionType.SEARCH,
                data: null
            })
        }
    } catch (err) {
        dispatch({
            type: actionType.SEARCH,
            data: null
        })
    }
}


// export const fetchDetailPlaylist = (playListId) =>async (dispatch) => {
//     try{
//         const response = await apis.getDetailPlaylist(playListId)
//         if(response?.data.err === 0) {
//             dispatch({
//                 type: actionType.GET_PLAYLIST,
//                 songs: response.data?.data?.items
//             })
//         }
//     } catch (error){
//         dispatch({
//             type: actionType.GET_PLAYLIST,
//             song: null
//         })
//     }

     
// }

