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

  export const questions = () => ({
    type: types.QUESTION,
    payload: axios({
      method: "GET",
      url: `http://192.168.0.26:3333/api/v1/questions`
    })
  })