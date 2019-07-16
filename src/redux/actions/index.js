 import {AsyncStorage} from 'react-native';
import * as types from '../types'
import axios from 'axios'

export const registration = (value) => ({
    type: types.REGISTRATION,
    payload: axios({
      method: "POST",
      url: `http://192.168.0.26:3333/api/v1/user`,
      data: {
        name: value.name,
        email: value.email,
        phone_number: value.phone_number
      }
    })
  })

  export const questions = (number) => ({
    type: types.QUESTION,
    payload: axios({
      method: "GET",
      url: `http://192.168.0.26:3333/api/v1/question`,
      params: {
        number
      }
    })
  })

  export const answer = (value) => ({
    type: types.ANSWER,
    payload: axios({
      method: "POST",
      url: `http://192.168.0.26:3333/api/v1/answer`,
      data: {
        questionId: value.questionId,
        userId: value.userId,
        answer: value.answer,
        attachment: value.attachment
      }
    })
  })