import axios from 'axios';
import * as types from '../types';
import { BASE_URL } from '../../config/config';

export const registration = userData => {
  return {
    type: types.REGISTRATION,
    payload: axios.post(
      'https://interviewapp-api.herokuapp.com/api/v1/user',
      userData
    )
  };
};
