import * as types from '../types'
import { AsyncStorage } from 'react-native'

const initialState = {
    data: [],
    error: null,
    isLoading: false,
}

export default function registration(state = initialState, action){
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
        userId: AsyncStorage.setItem('user_id', JSON.stringify(action.payload.data.id)),
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