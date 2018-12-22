// @External Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// @Dependencies
import { POSTER_PATH } from '../constants'
import AwesomeIcon from './AwesomeIcon'

// @Component
class Movie extends Component {
  state = {
    isFav: false
  }

  render() {
    const { movie } = this.props
    const { isFav } = this.state

    return (
      <Wrapper>
        <Link to={`/detail-view/${movie.id}`}>
          <Overdrive id={movie.title}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
              title={movie.title}
            />
          </Overdrive>
        </Link>
        <AwesomeIcon
          icon="heart"
          className={isFav ? 'isFav' : ''}
          onClick={() => this.setState({ isFav: !isFav })}
        />
      </Wrapper>
    )
  }
}

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

  i.isFav {
    color: #f39c12;
  }
`

export const Poster = styled.img`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  transition: all 0.25s;

  &:hover {
    box-shadow: 0 0 35px black;
  }
`
