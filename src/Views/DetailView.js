import React, { Component } from 'react'
import Overdrive from 'react-overdrive'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { getMovie, resetMovie } from '../Redux/Actions'
import { Poster } from '../Components/Movie'
import AwesomeIcon from '../Components/AwesomeIcon'
import { POSTER_PATH, BACKDROP_PATH } from '../constants'

class MovieDetail extends Component {
  state = {
    movie: {}
  }

  async componentDidMount() {
    const { getMovie, match } = this.props
    const result = await getMovie(match.params.id)
    result === 'GET_MOVIE_OK' && this.setState({ movie: this.props.movie })
  }

  componentWillUnmount() {
    const { resetMovie } = this.props
    resetMovie()
  }

  render() {
    const { movie } = this.state
    return (
      <div>
        {Object.keys(movie).length > 0 && (
          <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
            <Link to="/">
              <AwesomeIcon icon="arrow-left" />
              Listado de películas
            </Link>
            <MovieInfo>
              <Overdrive id={movie.title}>
                <Poster
                  src={`${POSTER_PATH}${movie.poster_path}`}
                  alt={movie.title}
                  title={movie.title}
                />
              </Overdrive>
              <div>
                <h1>{movie.title}</h1>
                <h3>{movie.release_date}</h3>
                <p>{movie.overview}</p>
              </div>
            </MovieInfo>
          </MovieWrapper>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movie: state.movies.movie,
  isLoaded: state.movies.movieLoaded
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovie,
      resetMovie
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail)

const MovieWrapper = styled.article.attrs({ className: 'MovieDetail' })`
  background: url(${props => props.backdrop}) center center / cover no-repeat;
  padding-top: 50vh;
  position: relative;

  a {
    background: #222;
    color: white;
    left: 0;
    padding: 10px 30px;
    position: absolute;
    top: 0;

    i {
      margin-right: 10px;
    }
  }
`

const MovieInfo = styled.div.attrs({ className: 'MovieInfo' })`
  background: white;
  display: flex;
  padding: 2rem 10%;
  text-align: left;

  & > div {
    margin-left: 20px;
  }

  img {
    position: relative;
    top: -5rem;
  }
`
