import React from 'react';
import PropTypes from 'prop-types';


function Button () {
  return (
    <button onClick={doTheClick}>click here to update</button>
  );
}

Button.propTypes = {
  doTheClick: PropTypes.func.isRequired,
};

export default Button;
