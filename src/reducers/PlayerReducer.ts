import { LOADING_PLAYER, PlayerDispatchTypes, PlayersList, PLAYER_FAIL, PLAYER_SUCCESS } from "../Actions/NbaTypes";

interface DefaultState{
    loading:boolean,
    player?:PlayersList
}

const defaultState = {
    loading:false
}

const playerReducer = (state:DefaultState = defaultState, action: PlayerDispatchTypes): DefaultState => {
    switch(action.type){
        case PLAYER_FAIL:
            return{
                loading:false
            }
        case LOADING_PLAYER:
            return{
                loading:true
            }
        case PLAYER_SUCCESS:
            return{
                loading:false,
                player:action.payload
            }
        default: return state
    }
}

export default playerReducer