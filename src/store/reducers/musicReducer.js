import { act } from "react-dom/test-utils"
import actionType from "../actions/actionType"

const initState = {
    currentSongId: null,
    isPlaying: false
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
        default :
            return state 
    }

}

export default musicReducer;