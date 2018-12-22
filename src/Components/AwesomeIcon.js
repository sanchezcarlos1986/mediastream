// @External Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// @Component
const AwesomeIcon = ({ icon, className, onClick }) => (
  <i className={`fas fa-${icon} ${className}`} onClick={onClick} />
)

// @Proptypes
AwesomeIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

// @Export Component
export default AwesomeIcon
