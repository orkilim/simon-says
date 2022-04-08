import { applyMiddleware, createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import gameReducer from './reducers/gameReducer'
import leaderboardsReducer from './reducers/leaderboardsReducer'

const rootReducer=combineReducers({gameReducer,leaderboardsReducer})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store