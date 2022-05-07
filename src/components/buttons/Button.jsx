import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({
  contentText, setValue, isOperatorButton, isFunctionalButton,
}) => (
  <button
    className={`button ${isOperatorButton ? 'operator-button' : ''} ${isFunctionalButton ? 'functional-button' : ''}`}
    onClick={() => setValue(contentText)}
    type="button"
  >
    {contentText}
  </button>
)

Button.propTypes = {
  contentText: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isOperatorButton: PropTypes.bool,
  isFunctionalButton: PropTypes.bool,
}

Button.defaultProps = {
  isOperatorButton: false,
  isFunctionalButton: false,
}

export default Button
