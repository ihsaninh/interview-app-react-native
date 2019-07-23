import * as types from '../types';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
};

export default function answer(state = initialState, action) {
  switch (action.type) {
    case types.ANSWER:
      return {
        ...state,
        isLoading: true,
      };
    case types.ANSWER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      };
    case types.ANSWER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };

    default:
      return state;
  }
}
