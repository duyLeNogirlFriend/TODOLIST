import { act } from "react-dom/test-utils"
import actionType from "../actions/actionType"

const initState = {
    banner : [],
    chill: {},
    life_loving: {},
    remix: {},
    moody: {},
    popular_artist : {},
    top_100: {},
    album_hot: {},
    new_release: {},
    is_loading: false,
    week_chart: {},
}
const appReducer = (state = initState, action ) => { 
    switch(action.type) {
        case actionType.GET_HOME:     
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null, 
                chill: action.homeData?.find(item => item.sectionId === 'hEditorTheme') || {},
                life_loving: action.homeData?.find(item => item.sectionId === 'hEditorTheme2') || {},
                remix: action.homeData?.find(item => item.sectionId === 'hEditorTheme3') || {},
                moody: action.homeData?.find(item => item.sectionId === 'hEditorTheme4') || {},
                popular_artist: action.homeData?.find(item => item.sectionId === 'hArtistTheme') || {},
                top_100: action.homeData?.find(item => item.sectionId === 'h100') || {},
                album_hot: action.homeData?.find(item => item.sectionId === 'hAlbum') || {},
                new_release: action.homeData?.find(item => item.sectionType === 'new-release') || {},
                week_chart: action.homeData?.find(item => item.sectionType === 'weekChart')?.items || {}
            }
        case actionType.LOADING: 
            return{
                ...state, 
                isLoading: action.flag
            }    
            

        default :
            return state 
    }

}

export default appReducer