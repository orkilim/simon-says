import { 
    change_player_sequence,
    color_change,
    pressed_button,
    show_button,
    change_text_style,
    change_unclickable,
    increase_score,
    reset_game,
    change_playing,
    set_name,
    change_modal_vis
 } from "./types";

export const increaseScore=(score)=>{
    return {
            type:increase_score,
            payload:score
        }
}

export const reset=()=>dispatch=>{
    
    dispatch({
        type:reset_game
    })
}

export const changeUnclickable=(flag)=>dispatch=>{
    
    dispatch({
        type:change_unclickable,
        payload:flag
    })
}

export const changeTextStyle=(newStyle)=>dispatch=>{
    
    dispatch({
        type:change_text_style,
        payload:newStyle
    })
}

export const showButton=(newStyle)=>dispatch=>{
    
    dispatch({
        type:show_button,
        payload:newStyle
    })
}

export const pressedButton=(flag)=>dispatch=>{
    
    dispatch({
        type:pressed_button,
        payload:flag
    })
}

export const colorChange=(newColors)=>dispatch=>{
    
    dispatch({
        type:color_change,
        payload:newColors
    })
}

export const changePsequence=(sequence)=>dispatch=>{
    
    dispatch({
        type:change_player_sequence,
        payload:sequence
    })
}

export const changePlayer=(playing)=>dispatch=>{
    
    dispatch({
        type:change_playing,
        payload:playing
    })
}

export const setName=(name)=>dispatch=>{
    
    dispatch({
        type:set_name,
        payload:name
    })
}

export const changeModalVis=(vis)=>dispatch=>{
    
    dispatch({
        type:change_modal_vis,
        payload:vis
    })
}