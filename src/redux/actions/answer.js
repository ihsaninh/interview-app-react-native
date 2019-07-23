import axios from "axios";
import * as types from "../types";

export const answer = userAnswer => {
  return {
    type: types.ANSWER,
    payload: axios.post(
      "https://interviewapp-api.herokuapp.com/api/v1/answer",
      userAnswer
    )
  };
};
