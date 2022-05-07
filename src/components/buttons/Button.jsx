import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ contentText, setValue, isOperatorButton, isFunctionalButton }) => {
  return (
    <button
      className={`button ${isOperatorButton ? 'operator-button' : ''} ${isFunctionalButton ? 'functional-button' : ''}`}
      onClick={() => setValue(contentText)}
    >
      {contentText}
    </button>
  );
}

Button.propTypes = {
  contentText: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  isOperatorButton: PropTypes.bool,
  isFunctionalButton: PropTypes.bool
}

export default Button;