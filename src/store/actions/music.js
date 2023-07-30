import actionType from "./actionType";
import * as apis from '../../apis'


export const setCurrentSongId = (songId) => ({
    type: actionType.SET_CURRENT_SONG_ID,
    songId
})

export const checkPlaying = (flag) => ({
    type: actionType.CHECK_PLAYING,
    flag
})

