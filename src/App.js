// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'

import './Components/styles'
import Header from './Components/Header'
import Footer from './Components/Footer'

// @Component
const App = ({ children }) => (
  <main>
    <Header />
    {children}
    <Footer />
  </main>
)

// @Proptypes
App.propTypes = {
  children: PropTypes.element.isRequired
}

export default App
