// @External Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// @Dependencies
import mediastreamLogo from '../Assets/mediastream.svg'
import AwesomeIcon from './AwesomeIcon'

// @Component
const Header = () => (
  <Wrapper>
    <Link to="/">
      <img alt="Mediastream" src={mediastreamLogo} />
    </Link>
    <div>
      <AwesomeIcon icon="heart" />
      {0}
    </div>
  </Wrapper>
)

// @Export Component
export default Header

// @Styles
const Wrapper = styled.header`
  align-items: center;
  background: black;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;

  img {
    height: auto;
    width: 200px;
  }

  div {
    color: white;
    i {
      margin-right: 10px;
      color: #f1c40f;
    }
  }
`
