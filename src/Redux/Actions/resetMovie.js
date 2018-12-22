// @Dependencies
import { RESET_MOVIE } from '../../constants'

/**
 * Se encarga únicamente de hacer un dispatch con un objeto vacío, para limpiar
 * la película almacenada en la store cada vez que la vista de detalle ejecuta el
 * método componentWillUnmount.
 */
const resetMovie = () => ({
  type: RESET_MOVIE
})

export default resetMovie
