// @External Dependencies
import axios from 'axios'

// @Dependencies
import { API_URL, API_KEY, GET_MOVIE } from '../../constants'
import { axiosError } from '../../Services'

/**
 * Similar a GET_MOVIES, con la diferencia de que aquí se obtiene la información
 *  de una película en particular. Para poder hacer esto, recibe como parámetro el id
 * de la película solicitada, la que a su vez pasa como parámetro al endpoint.
 */
const getMovie = id => {
  const requestId = 'getMovie'
  return async dispatch => {
    return axios
      .get(`${API_URL}/3/movie/${id}?api_key=${API_KEY}&language=es-ES`, {
        requestId
      })
      .then(response => {
        if (response.status === 200 && response.data) {
          dispatch({
            type: GET_MOVIE,
            payload: response.data
          })
          return 'GET_MOVIE_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default getMovie
