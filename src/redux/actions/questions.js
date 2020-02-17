import axios from 'axios';
import * as types from '../types';
import { BASE_URL } from '../../config/config';

export const questions = number => {
  return {
    type: types.QUESTION,
    payload: axios.get(
      'https://interviewapp-api.herokuapp.com/api/v1/question',
      {
        params: {
          number
        }
      }
    )
  };
};
