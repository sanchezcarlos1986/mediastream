// @External Dependencies
import axios from 'axios'

// @Dependencies
import { API_URL, API_KEY, GET_MOVIES } from '../../constants'
import { axiosError } from '../../Services'

/**
 * Se encarga de hacer el GET de películas a la API.
 * Una vez que la respuesta del endpoint está OK y devuelve datos, hacemos el DISPATCH hacia
 * la Store, para dejar el listado de películas disponible para toda la app.
 */
const getMovies = () => {
  const requestId = 'getMovies'
  return async dispatch => {
    return axios
      .get(
        `${API_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`,
        { requestId }
      )
      .then(response => {
        if (response.status === 200 && response.data.results) {
          dispatch({
            type: GET_MOVIES,
            payload: response.data.results
          })
          return 'GET_MOVIES_OK'
        } else {
          return 'ERROR'
        }
      })
      .catch(err => axiosError(err, requestId, dispatch))
  }
}

export default getMovies
