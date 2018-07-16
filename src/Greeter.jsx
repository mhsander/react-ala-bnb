import React from 'react';
import PropTypes from 'prop-types';

function Greeter({ name, time, doTheClick }) {
  const formattedDateString = new Date(time);

  const myMessage = `Greetings ${name}! I said my greetings at ${formattedDateString}`;

  return (
    <section>
      <h2>{myMessage}</h2>
      <button onClick={doTheClick}>click here to update</button>
    </section>
  );
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  doTheClick: PropTypes.func.isRequired,
};

export default Greeter;
