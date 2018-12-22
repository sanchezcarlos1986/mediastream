// @External Dependencies
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// @Dependencies
import { getMovies } from '../Redux/Actions'
import Movie from './Movie'

// @Component
class MovieList extends Component {
  /**
   * Es el primer método que se ejecuta, el cual a su vez, mediante la acción getPeople de Redux, obtiene el
   * listado de personas desde la API, y los setea en el estado del componente.
   */
  componentDidMount() {
    const { getMovies, isLoaded } = this.props
    !isLoaded && getMovies()
  }

  render() {
    const { movies, isLoaded } = this.props
    if (!isLoaded) return <h1>Cargando...</h1>

    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    )
  }
}

// @Proptypes
MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired
}

// @Export Component
const mapStateToProps = state => ({
  movies: state.movies.list,
  isLoaded: state.movies.moviesLoaded
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

// @Styles
const MovieGrid = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(7, 1fr);
  padding: 45px 1rem;
`
