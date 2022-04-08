import {
    save_score
} from '../actions/types'

const initialState = {
    topPlayers: []
}

const leaderboardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case save_score:
            {
            if (state.topPlayers.length < 10) {
                let temp = [...state.topPlayers, action.payload]
                temp = temp.sort((a, b) => { return a.score - b.score })
                return {
                    ...state,
                    topPlayers: temp
                }
            }
            if (state.topPlayers.length == 10) {
                let temp = [...state.topPlayers]
                temp = temp.sort((a, b) => { return a.score - b.score })
                for (let i = 0; i < state.topPlayers.length; i++) {
                    if (Math.max(action.payload.score,state.topPlayers[i])==state.topPlayers[i])
                    {
                        temp.splice(i-1,1,action.payload)
                        break
                    }
                }
                return{
                    ...state,topPlayers:temp
                }
            }
            break
        }

        default:
            return state
    }
}

export default leaderboardsReducer