import { GET_ALL_DOGS, GET_ALL_TEMPERAMENTS } from './actions';

const initialState = {
  dogs: [],
  copyDogs: [],
  temperaments: [],
  currentPage: 1,
}

const reducer = (state= initialState, {type, payload}) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        dogs: payload,
        copyDogs: payload,
      }
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer;