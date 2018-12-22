// @External Dependencies
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// @Dependencies
import mediastreamLogo from '../Assets/mediastream.svg'

// @Component
const Header = () => (
  <Wrapper>
    <Link to="/">
      <img alt="Mediastream" src={mediastreamLogo} />
    </Link>
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
`
