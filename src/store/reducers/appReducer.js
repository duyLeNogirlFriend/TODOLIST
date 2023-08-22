import actionType from "../actions/actionType"

const initState = {
    banner : [],
    chill: {},
    new_release: {}
}
const appReducer = (state = initState, action ) => { 
    switch(action.type) {
        case actionType.GET_HOME:     
            return {
                ...state,
                banner: action.homeData?.find(item => item.sectionId === 'hSlider')?.items || null, 
                chill: action.homeData?.find(item => item.sectionId === 'hEditorTheme') || {},
                new_release: action.homeData?.find(item => item.sectionType === 'new-release')?.items || null
                
            }


        default :
            return state 
    }

}

export default appReducer