import {
    save_score
} from './types'

export const saveScore=(player_name_and_score)=>dispatch=>{
    
    dispatch({
        type:save_score,
        payload:player_name_and_score
    })
}