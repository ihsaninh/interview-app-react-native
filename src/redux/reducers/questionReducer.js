import * as types from '../types'
import { AsyncStorage } from 'react-native'

const initialState = {
    data: [],
    error: null,
    isLoading: false,
    saveToken: null
}

export default function questions(state = initialState, action){
    switch (action.type){
        case types.QUESTION:
      return {
        ...state,
        isLoading: true,
      };
    case types.QUESTION_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case types.QUESTION_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };

      default:
        return state
    }
}