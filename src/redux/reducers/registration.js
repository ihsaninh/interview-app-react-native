import * as types from "../types";

const initialState = {
  data: [],
  error: null,
  isSuccess: false,
  isLoading: false,
  isError: false
};

export default function registration(state = initialState, action) {
  switch (action.type) {
    case types.REGISTRATION_PENDING:
      return {
        ...state,
        data: [],
        isLoading: true,
      };
    case types.REGISTRATION_FULFILLED:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        data: action.payload.data,
        userId: action.payload.data.id,
      };
    case types.REGISTRATION_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: `'Error when registration caused the ' + action.payload.message`
      };
    default:
      return state;
  }
}
