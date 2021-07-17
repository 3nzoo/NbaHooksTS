import axios from "axios";
import { Dispatch } from "redux";
import { LOADING_PLAYER, PlayerDispatchTypes, PLAYER_SUCCESS } from "./NbaTypes";
import {apiKey} from './key'
export const GetNbaPlayer = (player:string) => async (dispatch: Dispatch<PlayerDispatchTypes>)=>{

    try{
        dispatch({
            type: LOADING_PLAYER
        })

        const result = await axios.get(`https://free-nba.p.rapidapi.com/players`, {
        params:{search:`${[player]}`,per_page:'25',page:'0'}, 
        headers:{
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'free-nba.p.rapidapi.com'
        }})

        dispatch({type: PLAYER_SUCCESS, payload:result.data})

    }catch(err){
        console.log(err)
    }
    
}

