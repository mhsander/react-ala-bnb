import React from 'react';
import PropTypes from 'prop-types';


export default function Greeter(props) {
  return (
    <div>
      <section>
        <h2>Greetings, {props.name}!</h2>
        <h2>How is it going?</h2>
        <h3>Everything is {props.mood}.</h3>

      </section>
    </div>
  );
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
}

