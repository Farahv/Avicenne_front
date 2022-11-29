const initialState = {
    sideBarState : true,
    headerState : false,
}

const reducer = (state = initialState, action) =>{
    if(action.type === 'TOGGLEDRAWER'){
        return {
            sideBarState : !state.sideBarState
        }
    }

    if(action.type === 'HIDEHEADER'){
        return{
            sideBarState : state.sideBarState,
            headerState : !state.headerState
        }
    }

    return state
}

export default reducer;