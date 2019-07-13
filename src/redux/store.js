import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers, persistStore } from "redux-persist"

import { AsyncStorage } from 'react-native'

import middlewares from './middleware';
import appReducer from './reducers';

const config = {
    key : "primary",
    blacklist: [],
    // whiteList : [],
    storage : AsyncStorage
}

let persistedReducer = persistCombineReducers(config,appReducer)

const store = createStore(persistedReducer, {}, applyMiddleware(...middlewares))
const persistor =  persistStore(store)

export { store,persistor };