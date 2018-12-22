// @External Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// @Dependencies
import { POSTER_PATH } from '../constants'

// @Component
const Movie = ({ movie }) => (
  <Wrapper>
    <Link to={`/detail-view/${movie.id}`}>
      <Overdrive id={movie.id.toString()}>
        <Poster
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
        />
      </Overdrive>
    </Link>
  </Wrapper>
)

export default Movie

// @Proptypes
Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}

// @Styles
const Wrapper = styled.div.attrs({ className: 'Wrapper' })`
  text-align: center;
`

export const Poster = styled.img`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  transition: all 0.25s;

  &:hover {
    box-shadow: 0 0 35px black;
  }
`
