import React from 'react';
import PropTypes from 'prop-types';

 function Button({ onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;