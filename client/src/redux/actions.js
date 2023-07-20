import axios from 'axios'

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_ALL_TEMPERAMENTS = 'GET_ALL_TEMPERAMENTS';

export const getAllDogs = () => {
  return async (dispatch) => {
    const URL = 'http://localhost:3001/dogs'
    const {data} = await axios(URL)
    dispatch({type: GET_ALL_DOGS, payload: data})
  }
}

export const getAllTemperaments = () => {
  return async (dispatch) => {
    const URL = 'http://localhost:3001/temperaments'
    const {data} = await axios(URL)
    dispatch({type: GET_ALL_TEMPERAMENTS, payload: data})
  }
}