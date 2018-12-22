// @Dependencies
import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from '../../constants'

const initialState = {}

// @Export Reducer
export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        list: payload,
        moviesLoaded: true
      }
    case GET_MOVIE:
      return {
        ...state,
        movie: payload,
        movieLoaded: true
      }
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false
      }
    default:
      return state
  }
}
