import { applyMiddleware, createStore,combineReducers } from "redux";
import thunk from "redux-thunk";
import gameReducer from './reducers/gameReducer'
import leaderboardsReducer from './reducers/leaderboardsReducer'
import { persistStore,persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig={
    key:'persist-key',
    storage:AsyncStorage
}

const rootReducer=combineReducers({gameReducer,leaderboardsReducer})

const persistedReducer=persistReducer(persistConfig,rootReducer)

const store=createStore(persistedReducer,applyMiddleware(thunk))

const persistor=persistStore(store)

export default store
export {persistor}