import * as types from '../types';

const initialState = {
  data: [],
  error: null,
  isLoading: false,
  isError: false,
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case types.QUESTION_PENDING:
      return {
        ...state,
        data: [],
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
        isError: true,
        error: action.payload.message,
      };
    default:
      return state;
  }
}
