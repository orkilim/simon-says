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
} from "../actions/types";


const initialState = {
    score: 0,
    simonSquence: [],
    playerSequence: [],
    show: { justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 5, height: "45%" },//showing the start button
    playing: "Simon's",
    unclickable: true,
    modalVis: false,
    name: "",
    pressed: false,
    textStyle: { color: "white", fontSize: 20 },
    activeColor: { "red": "red", "yellow": "gold", "green": "green", "blue": "blue" }
}

const gameReducer = (state = initialState, action) => {

    switch (action.type) {
        case increase_score:
            {

                return {
                    ...state,
                    score: (state.score + action.payload)
                }
                break;
            }
        case reset_game:
            {

                return {
                    ...state,
                    simonSquence: [],
                    playerSequence: [],
                    show: { justifyContent: "center", alignItems: "center", backgroundColor: "black", borderRadius: 5, height: "45%" },//showing the start button
                    playing: "Simon's",
                    unclickable: true,
                    modalVis: true,
                    name: "",
                    pressed: false,
                    textStyle: { color: "white", fontSize: 20 },
                    activeColor: { "red": "red", "yellow": "gold", "green": "green", "blue": "blue" }

                }
                break;
            }
        case change_unclickable:
            {

                return {
                    ...state, unclickable: action.payload
                }
                break;
            }
        case change_text_style: {

            return {
                ...state, textStyle: action.payload
            }
            break;
        }
        case show_button: {

            return {
                ...state, show: action.payload
            }
            break;
        }
        case pressed_button:
            {

                return {
                    ...state, pressed: action.payload
                }
                break;
            }
        case color_change:
            {

                return {
                    ...state, activeColor: action.payload
                }
                break;
            }
        case change_player_sequence:
            {

                return {
                    ...state, playerSequence: action.payload
                }
                break
            }
        case change_playing:
            {

                return {
                    ...state,
                    playing: action.payload
                }
                break
            }
        case set_name:
            {

                return {
                    ...state,
                    name: action.payload
                }
                break
            }
        case change_modal_vis:
            {

                return {
                    ...state,
                    modalVis: action.payload
                }
                break
            }
        default:
            return state
    }
}

export default gameReducer