export const LOADING_PLAYER = "LOADING_PLAYER";
export const PLAYER_FAIL = "PLAYER_FAIL";
export const PLAYER_SUCCESS = "PLAYER_SUCCESS";


export type PlayersList = {
    data:PlayerDetails[]
}

export type PlayerDetails = {
    id:number,
    first_name: string,
    last_name: string
    team:{
        conference:string,
        full_name:string
        id:number
    }

}





export interface PlayerLoading{
    type: typeof LOADING_PLAYER
}

export interface PlayerFail{
    type: typeof PLAYER_FAIL
}

export interface PlayerSuccess{
    type: typeof PLAYER_SUCCESS,
    payload:PlayersList
}

export type PlayerDispatchTypes = PlayerLoading | PlayerFail | PlayerSuccess