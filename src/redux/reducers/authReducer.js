import * as types from '../types'
import { AsyncStorage } from 'react-native'

const initialState = {
    data: [],
    error: null,
    isLoading: false,
    saveToken: null
}

export default function auth(state = initialState, action){
    switch (action.type){
        case types.REGISTRATION:
      return {
        ...state,
        isLoading: true,
      };
    case types.REGISTRATION_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        saveToken: AsyncStorage.setItem('token', action.payload.data.token),
      };
    case types.REGISTRATION_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };

      default:
        return state
    }
}